/* eslint-disable react/jsx-pascal-case */
// Main Category Icon
import CategoryIcon from 'assets/icons/glass/all-i.svg';
import ProgrammingIcon from 'assets/icons/glass/programming-l v.svg';
import DSIcon from 'assets/icons/glass/datascience-l.svg';
import HardwareIcon from 'assets/icons/glass/hardware-l.svg';
import DrawingIcon from 'assets/icons/glass/drawing-l.svg';
import DesignIcon from 'assets/icons/glass/design-l.svg';
import MovieIcon from 'assets/icons/glass/movie-l.svg';
import GameIcon from 'assets/icons/glass/game-l.svg';
import CookingIcon from 'assets/icons/glass/cooking-l.svg';
import CreativeIcon from 'assets/icons/glass/cratetive-l.svg';
import MoneyIcon from 'assets/icons/glass/money-l.svg';
import LanguageIcon from 'assets/icons/glass/language.svg';
import CareerIcon from 'assets/icons/glass/career-l.svg';
import LifestyleIcon from 'assets/icons/glass/lifestyle-l.svg';

// Sidebar Icon
import 전체강의 from 'assets/icons/all.svg';
import 게임 from 'assets/icons/game.svg';
import 금융투자 from 'assets/icons/money.svg';
import 드로잉 from 'assets/icons/drawing.svg';
import 디자인 from 'assets/icons/design.svg';
import 라이프스타일 from 'assets/icons/lifestyle.svg';
import 요리 from 'assets/icons/cooking.svg';
import 커리어 from 'assets/icons/career.svg';
import 프로그래밍 from 'assets/icons/programming.svg';
import 하드웨어 from 'assets/icons/hardware.svg';
import 데이터사이언스 from 'assets/icons/datascience.svg';
import 학문외국어 from 'assets/icons/language.svg';
import 크리에이티브 from 'assets/icons/createtive.svg';
import 영상3D애니메이션 from 'assets/icons/movie.svg';

export const CategoryData = [
  {
    id: 0,
    main: '전체강의',
    sub: [['전체강의', 0]],
    mainCategoryIcon: <CategoryIcon />,
    sideBarIcon: <전체강의 />,
  },
  {
    id: 11,
    main: '프로그래밍',
    sub: [
      ['교양', 8],
      ['데브옵스/인프라', 12],
      ['모바일', 20],
      ['보안네트워크', 25],
      ['블록체인', 29],
      ['시스템', 34],
      ['앱', 38],
      ['웹', 45],
      ['컴퓨터공학', 59],
      ['클라우드', 61],
      ['기타', 10],
    ],
    mainCategoryIcon: <ProgrammingIcon />,
    sideBarIcon: <프로그래밍 />,
  },
  {
    id: 3,
    main: '데이터사이언스',
    sub: [
      ['데이터분석', 13],
      ['데이터시각화', 14],
      ['데이터엔지니어링', 15],
      ['인공지능', 48],
      ['기타', 10],
    ],
    mainCategoryIcon: <DSIcon />,
    sideBarIcon: <데이터사이언스 />,
  },
  {
    id: 12,
    main: '하드웨어',
    sub: [
      ['로봇', 16],
      ['모빌리티', 21],
      ['반도체', 23],
      ['임베디드', 49],
      ['컴퓨터구조', 60],
      ['기타', 10],
    ],
    mainCategoryIcon: <HardwareIcon />,
    sideBarIcon: <하드웨어 />,
  },
  {
    id: 4,
    main: '드로잉',
    sub: [
      ['웹툰/웹소설', 46],
      ['취미드로잉', 56],
      ['캐릭터일러스트', 57],
      ['컨셉 아트', 58],
    ],
    mainCategoryIcon: <DrawingIcon />,
    sideBarIcon: <드로잉 />,
  },
  {
    id: 5,
    main: '디자인',
    sub: [
      ['2D/그래픽/브랜딩', 1],
      ['3D/건축', 2],
      ['제품디자인', 53],
      ['UX/UI', 64],
    ],
    mainCategoryIcon: <DesignIcon />,
    sideBarIcon: <디자인 />,
  },
  {
    id: 7,
    main: '영상/3D/애니메이션',
    sub: [
      ['3D/CG', 3],
      ['모션그래픽', 22],
      ['블렌더', 28],
      ['애니메이션', 37],
      ['영상/사진', 40],
      ['VR/AR', 65],
    ],
    mainCategoryIcon: <MovieIcon />,
    sideBarIcon: <영상3D애니메이션 />,
  },
  {
    id: 1,
    main: '게임',
    sub: [
      ['게임/e스포츠', 4],
      ['게임개발', 5],
      ['게임제작', 6],
    ],
    mainCategoryIcon: <GameIcon />,
    sideBarIcon: <게임 />,
  },
  {
    id: 8,
    main: '요리',
    sub: [
      ['베이킹/디저트', 24],
      ['요리/음료', 43],
    ],
    mainCategoryIcon: <CookingIcon />,
    sideBarIcon: <요리 />,
  },
  {
    id: 10,
    main: '크리에이티브',
    sub: [
      ['공예', 7],
      ['메타버스', 19],
      ['소설/글쓰기', 32],
      ['음악', 47],
      ['패션/사진', 62],
      ['헤어/뷰티', 63],
      ['기타', 10],
    ],
    mainCategoryIcon: <CreativeIcon />,
    sideBarIcon: <크리에이티브 />,
  },
  {
    id: 2,
    main: '금융/투자',
    sub: [
      ['금융투자실무', 9],
      ['부동산', 26],
      ['재무/회계/세무', 51],
      ['재테크/주식', 52],
    ],
    mainCategoryIcon: <MoneyIcon />,
    sideBarIcon: <금융투자 />,
  },
  {
    id: 13,
    main: '학문/외국어',
    sub: [
      ['기타외국어', 11],
      ['수학', 33],
      ['아이/부모교육', 36],
      ['영어', 41],
      ['영어/기타외국어', 42],
      ['기타', 10],
    ],
    mainCategoryIcon: <LanguageIcon />,
    sideBarIcon: <학문외국어 />,
  },
  {
    id: 9,
    main: '커리어',
    sub: [
      ['마케팅', 17],
      ['마케팅/기타', 18],
      ['비즈니스', 30],
      ['비즈니스/기획', 31],
      ['업무생산성', 39],
      ['자격증', 50],
      ['창업/부업', 54],
      ['창업/부업/재테크/쇼핑몰', 55],
      ['기타', 10],
    ],
    mainCategoryIcon: <CareerIcon />,
    sideBarIcon: <커리어 />,
  },
  {
    id: 6,
    main: '라이프 스타일',
    sub: [
      ['기타', 10],
      ['뷰티', 27],
      ['심리', 35],
      ['운동', 44],
      ['음악', 47],
    ],
    mainCategoryIcon: <LifestyleIcon />,
    sideBarIcon: <라이프스타일 />,
  },
];
