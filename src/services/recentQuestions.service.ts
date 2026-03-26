import prisma from "../config/prisma";

interface GetRecentQuestionsInput {
  batchId: number;
  days?: number;
}

export const getRecentQuestionsService = async ({
  batchId,
  days = 7
}: GetRecentQuestionsInput) => {
  
  // Get recently assigned questions for this batch
  const recentQuestions = await prisma.questionVisibility.findMany({
    where: {
      class: {
        batch_id: batchId
      },
      assigned_at: {
        gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000) // days ago
      }
    },
    include: {
      question: {
        include: {
          topic: {
            select: {
              slug: true
            }
          }
        }
      },
      class: {
        select: {
          slug: true
        }
      }
    },
    orderBy: {
      assigned_at: 'desc'
    },
    distinct: ['question_id'] // Avoid duplicate questions
  });

  // Format response
  return recentQuestions.map((qv) => ({
    question_id: qv.question.id,
    question_name: qv.question.question_name,
    difficulty: qv.question.level,
    topic_slug: qv.question.topic.slug,
    class_slug: qv.class.slug,
    assigned_at: qv.assigned_at
  }));
};
