import { getInjection } from "@/di/container";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Training not found" },
      {
        status: 404,
      }
    );
  }
  const getTrainingByIdController = getInjection("IGetTrainingByIdController");
  const training = await getTrainingByIdController(id);

  return Response.json({ data: training });
}
