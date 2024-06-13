import { Channel, Video } from "@prisma/client";
import getCurrentUser from "./getCurrentUser";
import prisma from "@/vendor/db";
import { loadModel, predictRelevance } from "@/ml/model";

export default async function getRecommendedVideos(): Promise<
  (Video & { channel: Channel })[]
> {
  const currentUser = await getCurrentUser();

  try {
    const model = await loadModel();

    const allVideos = await prisma.video.findMany({
      where: {
        id: {
          notIn: (await prisma.userInteraction.findMany({
            where: { userId: currentUser?.id },
            select: { videoId: true },
          })).map((interaction) => interaction.videoId),
        },
      },
      include: {
        channel: true,
      },
    });

    const videoFeatures = allVideos.map(video => ({
      id: video.id,
      features: generateVideoFeatures(video) 
    }));
    const userFeatures = generateUserFeatures(currentUser); 

    const predictions = await Promise.all(videoFeatures.map(async (video) => {
      const score = await predictRelevance(model, userFeatures, video.features);
      return { ...video, relevanceScore: score };
    }));

    const recommendedVideos = predictions
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .map(prediction => allVideos.find(video => video.id === prediction.id))
      .filter(Boolean);

    return recommendedVideos;
  } catch (error: any) {
    throw new Error(error);
  }
}

function generateVideoFeatures(video: Video): number[] {
  return [];
}

function generateUserFeatures(user: any): number[] {
  return [];
}
