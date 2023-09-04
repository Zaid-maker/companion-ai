import prismadb from "@/lib/prismadb";

interface CompanionPageProps {
  params: {
    companionId: string;
  };
}

const CompanionPage = async ({ params }: CompanionPageProps) => {
  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
    },
  });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialDara={companion} categories={categories} />;
};

export default CompanionPage;
