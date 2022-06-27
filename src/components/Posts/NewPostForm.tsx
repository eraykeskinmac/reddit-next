import { Flex, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import TabItem from "./TabItem";

type NewPostFormProps = {};

const formTabs = [
  {
    id: 1,
    title: "Post",
    icon: IoDocumentText,
  },
  {
    id: 2,
    title: "Images & Video",
    icon: IoImageOutline,
  },

  {
    id: 3,
    title: "Link",
    icon: BsLink45Deg,
  },
  {
    id: 4,
    title: "Poll",
    icon: BiPoll,
  },
  {
    id: 5,
    title: "Talk",
    icon: BsMic,
  },
];

export type TabItem = {
  id: number;
  title: string;
  icon: typeof Icon.arguments;
};

const NewPostForm: React.FC<NewPostFormProps> = () => {
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
  return (
    <Flex direction="column" bg="white" borderRadius={4} mt={2}>
      <Flex width="100%">
        {formTabs.map((item) => (
          <TabItem
            item={item}
            selected={item.title === selectedTab}
            key={item.id}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </Flex>
    </Flex>
  );
};
export default NewPostForm;
