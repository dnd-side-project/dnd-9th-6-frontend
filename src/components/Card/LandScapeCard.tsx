import Image from 'next/image';
import CardShape from 'assets/icons/card/whitebg.svg';
import { TooltipIcon } from 'components/TooltipIcon';
import { Badge } from 'components/ui/badge';
import { Card, CardProps } from 'components/ui/card';

interface LandScapeCardProps extends CardProps {
  강사: string;
  타이틀: string;
  가격: string;
  플랫폼: string;
  이미지: string;
  후기수: number | undefined;
}

function LandScapeCard({
  강사 = '강사명',
  타이틀 = '강의명',
  가격 = '가격',
  플랫폼 = 'fastcampus',
  이미지 = '',
  후기수,
  ...props
}: LandScapeCardProps) {
  return (
    <Card
      className="group relative z-1 h-[264px] w-[275px] cursor-pointer border border-grayscale-100 bg-cover p-16"
      {...props}
    >
      {/* 배경 이미지 */}
      <div className="absolute left-0 top-0 z-[-1] h-full w-full transition-opacity">
        {이미지 ? (
          <Image
            src={이미지}
            alt="cover"
            className="h-full w-full object-cover"
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        ) : null}
      </div>
      {/* 북마크 버튼 */}
      {/* <Toggle
        asChild
        className="absolute right-[10px] top-[10px] z-1 hidden h-[24px] w-[24px] group-hover:block data-[state=on]:block"
      >
        <Bookmark className="fill-grayscale-500 hover:fill-blue-400 data-[state=on]:fill-blue-400" />
      </Toggle> */}
      {/* CardBody Shape */}
      <div className="absolute bottom-[-1px] left-[-2px] w-full">
        <CardShape />
      </div>
      {/* 플랫폼 아이콘 */}
      <div className="absolute bottom-[98px] left-[16px]">
        {(() => {
          switch (플랫폼) {
            case 'fastcampus':
              return <TooltipIcon variant="fastcampus" size="24" />;
            case 'inflearn':
              return <TooltipIcon variant="inflearn" size="24" />;
            case 'coloso':
              return <TooltipIcon variant="coloso" size="24" />;
            case 'class101':
              return <TooltipIcon variant="class101" size="24" />;
            default:
              return null;
          }
        })()}
      </div>
      {/* CardBody */}
      <div className="absolute bottom-[16px] w-full">
        {/* 강사, 타이틀, 가격 Text */}
        <div className="flex w-[243px] flex-col gap-[6px]">
          <div className="text-grayscale-300 detail2-semibold">{강사}</div>
          <div className="line-clamp-2 h-[36px] body3-semibold">{타이틀}</div>
          <div className="body1-extrabold">{가격}</div>
        </div>
      </div>
      {/* 후기수 뱃지 */}
      {후기수 ? (
        <div className="absolute bottom-[16px] right-[16px] cursor-pointer">
          <div className="block group-hover:hidden">
            <Badge variant="white">후기 {후기수}</Badge>
          </div>
          <div className="hidden group-hover:block">
            <Badge variant="blue">후기 작성하기</Badge>
          </div>
        </div>
      ) : null}
    </Card>
  );
}

export default LandScapeCard;
