import { doc, getDoc } from "firebase/firestore";
import React from "react";
import safeJsonStringify from "safe-json-stringify";
import { Community } from "../../../atoms/communitiesAtom";
import Header from "../../../components/Community/Header";
import NotFound from "../../../components/Community/NotFound";
import PageContent from "../../../components/Layout/PageContent";
import { firestore } from "../../../firebase/clientApp";

type CommunityPageProps = {
  communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  if (!communityData) {
    return <NotFound />;
  }

  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>
          <div>LHS</div>
        </>
        <>
          <div>RHS</div>
        </>
      </PageContent>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // get community data and  pass it  to client

  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    // Could add error page here.
    console.log("getServerSideProps error", error);
  }
}

export default CommunityPage;