import FastCampus from 'assets/icons/platform/fastcampus-32.svg';
import Inflearn from 'assets/icons/platform/inflearn-32.svg';
import Coloso from 'assets/icons/platform/coloso-32.svg';
import Class101 from 'assets/icons/platform/class101-32.svg';
import Bookmark from 'assets/icons/bookmark-border.svg';
import Edge from 'assets/icons/card/edge.svg';
import { Card, CardProps } from 'components/ui/card';
import { Button } from 'components/ui/button';

interface CoverCardProps extends CardProps {
  강사: string;
  타이틀: string;
  가격: string;
  플랫폼: string;
  이미지?: string;
}

const CoverCard = ({
  강사 = '강사명',
  타이틀 = '강의명',
  가격 = '가격',
  플랫폼 = 'fastcampus',
  이미지 = '',
  ...props
}: CoverCardProps) => {
  return (
    <Card
      className="group relative z-1 h-[263px] w-[557px] gap-[4px] rounded-[4px] bg-grayscale-800 bg-cover px-16 py-24"
      {...props}
    >
      {/* 배경 이미지 */}
      <div className="absolute left-0 top-0 z-[-1] h-full w-full opacity-50 blur-[2px] transition-opacity">
        <img src={이미지} alt="cover" className="h-full w-full object-cover" />
      </div>
      {/* 강사명, 타이틀명 Text */}
      <div className="flex w-[459px] flex-col gap-8">
        <div className="text-blue-300 body3-bold">{강사}</div>
        <div className="line-clamp-2 min-h-[48px] text-white H5-bold">
          {타이틀}
        </div>
      </div>
      {/* 가격 Text */}
      <div className="text-white H4-bold">{가격}</div>
      {/* 플랫폼 Icon */}
      <div className="absolute right-[16px] top-[24px] h-[32px] w-[32px]">
        {(() => {
          switch (플랫폼) {
            case 'fastcampus':
              return <FastCampus />;
            case 'inflearn':
              return <Inflearn />;
            case 'coloso':
              return <Coloso />;
            case 'class101':
              return <Class101 />;
            default:
              return null;
          }
        })()}
      </div>
      {/* 강의 찜 버튼 */}
      <div className="absolute bottom-[24px] right-[16px]">
        <Button size="sm" variant="outlined" className="gap-[4px] pl-16">
          강의 찜하기
          <Bookmark />
        </Button>
      </div>
      {/* 왼쪽 밑 엣지 배경 */}
      <div className="absolute bottom-0 left-0 z-0">
        <Edge />
      </div>
    </Card>
  );
};

export default CoverCard;
