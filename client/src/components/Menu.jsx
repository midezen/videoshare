import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketBallOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsESportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { devices } from "../utils/devices";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: calc(100vh - 50px);
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 50px;
  overflow-y: ${(props) => (props.toggle ? "hidden" : "scroll")};
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.track};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.thumb};
  }
  @media ${devices.laptop} {
    overflow-y: hidden;
  }
  @media ${devices.mobileL} {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: ${(props) => props.toggle && "100%"};
  padding: 18px 26px;
`;

const Item = styled.div`
  width: 100%;
  align-items: center;
  gap: ${(props) => (props.toggle ? "10px" : "20px")};
  font-size: ${(props) => props.toggle && "10px"};
  cursor: pointer;
  padding: 7.5px 2px;
  border-radius: 5px;
  display: ${(props) =>
    props.toggle === true && props.dontShow ? "none" : "flex"};
  flex-direction: ${(props) => props.toggle && "column"};

  &:hover {
    background-color: ${({ theme }) => theme.bg};
  }
  @media ${devices.laptop} {
    display: ${(props) => props.dontShow && "none"};
    flex-direction: column;
    gap: 10px;
    font-size: 10px;
  }
`;

const ItemText = styled.div`
  @media ${devices.tablet} {
    display: none;
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
  display: ${(props) => props.toggle && "none"};
  @media ${devices.laptop} {
    display: ${(props) => props.dontShow && "none"};
  }
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.toggle && "center"};
  @media ${devices.laptop} {
    align-items: center;
  }
`;

const LoginText = styled.div`
  display: ${(props) =>
    props.toggle === true && props.dontShow ? "none" : "flex"};
  @media ${devices.laptop} {
    display: none;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500px;
  margin-top: 10px;
  cursor: pointer;
  @media ${devices.tablet} {
    padding: 2px 10px;
  }
`;

const ButtonText = styled.div`
  display: ${(props) =>
    props.toggle === true && props.dontShow ? "none" : "flex"};
  @media ${devices.laptop} {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
  display: ${(props) =>
    props.toggle === true && props.dontShow ? "none" : "flex"};
  @media ${devices.laptop} {
    display: none;
  }
`;

const Menu = ({ toggle }) => {
  return (
    <Container toggle={toggle}>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item toggle={toggle}>
            <HomeIcon />
            <ItemText>Home</ItemText>
          </Item>
        </Link>

        <Item toggle={toggle}>
          <ExploreOutlinedIcon />
          <ItemText>Explore</ItemText>
        </Item>
        <Item toggle={toggle}>
          <SubscriptionOutlinedIcon />
          <ItemText>Subscriptions</ItemText>
        </Item>
        <Hr dontShow toggle={toggle} />
        <Item dontShow toggle={toggle}>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item dontShow toggle={toggle}>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr dontShow toggle={toggle} />
        <Login toggle={toggle}>
          <LoginText dontShow toggle={toggle}>
            Sign in to like Videos, Comment and Subscribe.
          </LoginText>
          <Link to="auth" style={{ textDecoration: "none" }}>
            <Button toggle={toggle}>
              <AccountCircleOutlinedIcon />
              <ButtonText dontShow toggle={toggle}>
                SIGN IN
              </ButtonText>
            </Button>
          </Link>
        </Login>
        <Hr dontShow toggle={toggle} />
        <Title dontShow toggle={toggle}>
          BEST OF MIDETUBE
        </Title>
        <Item dontShow toggle={toggle}>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item dontShow toggle={toggle}>
          <SportsBasketBallOutlinedIcon />
          Sports
        </Item>
        <Item dontShow toggle={toggle}>
          <SportsESportsOutlinedIcon />
          Gaming
        </Item>
        <Item dontShow toggle={toggle}>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item dontShow toggle={toggle}>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item dontShow toggle={toggle}>
          <LiveOutlinedIcon />
          Live
        </Item>
        <Hr dontShow toggle={toggle} />
        <Item dontShow toggle={toggle}>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item dontShow toggle={toggle}>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item dontShow toggle={toggle}>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
