import { Request, Response } from "express";
import { getRecentQuestionsService } from "../services/recentQuestions.service";

export const getRecentQuestions = async (req: Request, res: Response) => {
  try {
    // Get batch info from middleware (extractStudentInfo)
    const batchId = (req as any).batchId;
    const { days } = req.query;

    if (!batchId) {
      return res.status(400).json({
        error: "Student authentication required",
      });
    }

    // Parse days parameter (default to 7)
    const daysParam = days ? parseInt(days as string) : 7;
    if (isNaN(daysParam) || daysParam < 1 || daysParam > 30) {
      return res.status(400).json({
        error: "Days parameter must be a number between 1 and 30",
      });
    }

    const questions = await getRecentQuestionsService({
      batchId,
      days: daysParam
    });

    return res.json({
      questions,
      total: questions.length
    });

  } catch (error: any) {
    return res.status(500).json({
      error: error.message || "Failed to fetch recent questions",
    });
  }
};
