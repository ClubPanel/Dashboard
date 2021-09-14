import {Box, Center, chakra, Link, SimpleGrid, useToast} from "@chakra-ui/react";
import {RenderProps} from "../../../../pages/[[...name]]";
import React from "react";
import {GetConfig} from "../../../../shared/config/configStore";
import {DashboardConfig} from "../../config/DashboardConfig";
import axios from "axios";
import {DeleteButton} from "./DeleteButton";

const DashboardPageComponent = ({config, userInfo, data, mainConfig, csrf}: Partial<RenderProps>) => {
  const configs = GetConfig<DashboardConfig>("client/dashboard.json", config);

  const boxProps = {
    bg: "dark.700",
    height: "300px",
    maxWidth: {base: "50%", sm: "70%", md: "600px"},
    borderRadius: "20px",
    p: "10px"
  };

  const toast = useToast();

  const deleteUserButton = () => {
    axios.post("/dashboardbackend/deleteme", {csrf}).then(res => {
      window.location.reload();
    }).catch(e => {
      if(e?.response?.data) {
        toast({
          title: "Error",
          description: e.response.data,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left"
        });
      } else {
        toast({
          title: "Error",
          description: "An error occurred. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left"
        });
      }
    });
  };

  return (
    <SimpleGrid
      minChildWidth="400px"
      spacing="40px"
      p="50px"
    >
      <Box {...boxProps}>
        <chakra.h2 align="center" fontSize="1.5rem">Welcome {userInfo.username}!</chakra.h2>
        <chakra.p align="center">
          {configs.welcomeMessageDescription}
        </chakra.p>
      </Box>
      {Object.keys(mainConfig.sidebar).map(category => {
        return (
          <Box {...boxProps} key={category}>
            <chakra.h2 align="center" fontSize="1.5rem">{category}</chakra.h2>
            {configs.categoryDescriptions.hasOwnProperty(category) &&
              <chakra.p align="center">
                {configs.categoryDescriptions[category]}
              </chakra.p>
            }
            <chakra.ul
              ml="20px"
              mt="10px"
            >
              {mainConfig.sidebar[category].map(item => {
                return (
                  <chakra.li key={item.text}>
                    <Link href={item.url} aria-label={item.aria} color="cyan" textDecor="underline">{item.text}</Link>
                  </chakra.li>
                );
              })}
            </chakra.ul>
          </Box>
        );
      })}

      {configs.enableDelete &&
        <Box {...boxProps}>
          <chakra.h2 align="center" fontSize="1.5rem">Delete Account</chakra.h2>
          <chakra.p align="center">
            Below, you can delete your account to remove all data stored about you.
          </chakra.p>
          <chakra.div
            ml="20px"
            mt="10px"
          >
            <Center>
              <DeleteButton index={null} callback={deleteUserButton} warningMessage="Deleting your account will permanently delete all of your data. This action cannot be undone." aria="Delete user"/>
            </Center>
          </chakra.div>
        </Box>
      }
    </SimpleGrid>
  );
};

export default DashboardPageComponent;