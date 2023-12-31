import styled from "styled-components";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import SortIcon from "@mui/icons-material/Sort";
import AddComment from "../components/AddComment";
import Comments from "../components/Comments";
import Card from "../components/Card";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { devices } from "../utils/devices";
import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  padding: 0;
  @media screen and (min-width: 1100px) {
    padding: 0px 80px;
  }
  @media screen and (min-width: 1600px) {
    padding: 0px 160px;
  }
  @media screen and (min-width: 2100px) {
    padding: 0px 210px;
  }
  @media screen and (min-width: 2600px) {
    padding: 0px 260px;
  }
  @media screen and (max-width: 970px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 2;
  width: 100%;
`;

const VideoWrapper = styled.div`
  @media screen and (max-width: 970px) {
    margin: -22px;
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 15px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 490px) {
    font-size: 16px;
  }
`;

const ChannelDetailsTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 462px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const Channel = styled.div`
  display: flex;
  gap: 30px;
`;

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const ChannelImage = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  object-fit: cover;
`;

const ChannelInfoTexts = styled.div``;

const ChannelName = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 490px) {
    font-size: 14px;
  }
`;

const Subscribers = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.textSoft};
  @media screen and (max-width: 490px) {
    font-size: 11px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 462px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 30px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 10px 13px;
  gap: 2px;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 490px) {
    padding: 7px 10px;
  }
`;

const ChannelDetailsBottom = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  border 1px solid ${({ theme }) => theme.bgLighter};
  font-size: 15px;
  padding: 10px;
  border-radius: 10px;
  @media screen and (max-width: 1306px) {
    font-size: 13px;
  }
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.text};
`;

const Show = styled.span`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const ArrangeComments = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

const CommentCount = styled.span``;

const CommentSort = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
  @media screen and (max-width: 1306px) {
    font-size: 13px;
  }
`;

const Recommendation = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

const DisplayComments = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
  margin-top: 15px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Drawer = styled.div`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
`;

const Video = () => {
  const screenWidth = window.innerWidth;
  const [showComments, setShowComments] = useState(false);
  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  return (
    <Container>
      <Wrapper>
        <Content>
          <VideoWrapper>
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/vGxR98gI930"
              title="Youtube Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
          <Title>This is a video Title</Title>
          <ChannelDetailsTop>
            <Channel>
              <ChannelInfo>
                <ChannelImage src="https://media.istockphoto.com/id/1398997991/photo/young-businesswoman-using-a-digital-tablet-focused-designer-standing-in-her-agency-creative.webp?b=1&s=170667a&w=0&k=20&c=2dqRV4jIr2Aumy6KvN1U3xkQOefjIY8erwIxDkDPWVc=" />
                <ChannelInfoTexts>
                  <ChannelName>MideZen</ChannelName>
                  <Subscribers>500k Subscribers</Subscribers>
                </ChannelInfoTexts>
              </ChannelInfo>
              <Button>
                <NotificationsIcon />
                Subscribe
              </Button>
            </Channel>

            <Buttons>
              <Button>
                <ThumbUpAltIcon />
                3.8k
              </Button>
              <Button>
                <ThumbDownAltIcon />
              </Button>
            </Buttons>
          </ChannelDetailsTop>
          <ChannelDetailsBottom>
            <Info>702, 503 views · June 22, 2023</Info>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Desc>
            <Show>Show Less</Show>
          </ChannelDetailsBottom>

          <ArrangeComments>
            <CommentCount> 244 Comments</CommentCount>
            <CommentSort>
              <SortIcon /> Sort by
            </CommentSort>
          </ArrangeComments>
          <AddComment />
          {screenWidth <= 460 ? (
            <DisplayComments
              onClick={handleShowComments}
              style={{ fontSize: "14px" }}
            >
              Comments <UnfoldMoreIcon />
            </DisplayComments>
          ) : (
            <Comments />
          )}
          <Drawer>
            <SwipeableDrawer
              anchor="bottom"
              open={showComments}
              onClose={() => setShowComments(false)}
              onOpen={() => setShowComments(true)}
              PaperProps={{
                style: {
                  height: "60%",
                },
              }}
            >
              <Comments drawer="drawer" />
            </SwipeableDrawer>
          </Drawer>
        </Content>
        <Recommendation>
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
        </Recommendation>
      </Wrapper>
    </Container>
  );
};

export default Video;
