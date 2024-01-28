import Image from 'next/image';
import CardShape from 'assets/icons/card/whitebg-large.svg';
import Heart from 'assets/icons/heart-16.svg';
import Class101 from 'assets/icons/platform/class101-32.svg';
import Coloso from 'assets/icons/platform/coloso-32.svg';
import FastCampus from 'assets/icons/platform/fastcampus-32.svg';
import Inflearn from 'assets/icons/platform/inflearn-32.svg';
import Star from 'assets/icons/rating/star.svg';
import { Button } from 'components/ui/button';
import { Card, CardProps } from 'components/ui/card';

interface SquareCardProps extends CardProps {
  작성자: string;
  별점: number;
  작성일: string;
  내용: string;
  태그: string;
  이미지: string;
  플랫폼: string;
  찜수: number;
  좋아요: boolean;
}

function SquareCard({
  작성자 = '',
  별점 = 0,
  작성일 = '',
  내용 = '',
  태그 = '',
  이미지 = '',
  플랫폼 = '',
  찜수 = 0,
  좋아요 = false,
  ...props
}: SquareCardProps) {
  return (
    <Card className="group relative h-[364px] w-[305px] border border-grayscale-100 bg-grayscale-50" {...props}>
      {/* 배경 이미지 */}
      <div className="absolute left-0 top-0 h-full w-full">
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
      {/* 플랫폼 아이콘 */}
      <div className="absolute left-[16px] top-[72px] z-1">
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
      {/* CardBody Shape */}
      <div className="absolute bottom-0 left-[-1px] w-full">
        <CardShape />
      </div>
      {/* CardBody */}
      <div className="absolute bottom-0 w-full">
        {/* 작성자, 별점, 작성일 Text */}
        <div className="flex flex-col p-16">
          <div className="flex items-center gap-[16px] detail1-semibold">
            <div>{작성자}</div>
            <div className="flex gap-[8px]">
              <div className="flex gap-[2px]">
                <Star />
                {별점.toFixed(1)}
              </div>
              <div className="text-grayscale-300">{작성일.slice(0, 10)}</div>
            </div>
          </div>
          {/* 내용 Text */}
          <div className="mb-[24px] mt-[8px] line-clamp-3 flex h-[52px] w-full text-ellipsis detail1-medium">
            {내용}
          </div>
          {/* 태그 아이템 */}
          <div className="flex h-[50px] max-w-[273px] flex-wrap items-start gap-[2px] overflow-hidden detail1-semibold">
            {태그.split(',').map((item) => {
              return (
                <div
                  className="inline-flex items-center justify-center rounded-[2px] bg-grayscale-50 px-[8px] py-[4px] text-grayscale-600"
                  key={item}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        {/* 찜수 Text */}
        <div className="flex h-[35px] w-full items-center justify-end gap-[2px] p-8 text-grayscale-300 detail1-semibold">
          <Heart className="fill-grayscale-300" /> {찜수}
        </div>
        {/* 좋아요 버튼 (임시) */}
        <Button variant="primary" size="lg" className="relative bottom-0 left-0 w-[305px] gap-[4px]">
          강의 확인하러 가기
        </Button>
      </div>
    </Card>
  );
}

export default SquareCard;
