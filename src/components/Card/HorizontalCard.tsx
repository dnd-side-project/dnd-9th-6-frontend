import FastCampus from 'assets/icons/platform/fastcampus-16.svg';
import Inflearn from 'assets/icons/platform/inflearn-16.svg';
import Coloso from 'assets/icons/platform/coloso-16.svg';
import Class101 from 'assets/icons/platform/class101-16.svg';
import { Card, CardProps } from 'components/ui/card';
import { Rating } from 'react-simple-star-rating';

interface HorizontalCardProps extends CardProps {
  타이틀: string;
  작성자: string;
  별점: number;
  작성일: string;
  내용: string;
  태그: string;
  플랫폼: string;
}

const HorizontalCard = ({
  타이틀 = '',
  작성자 = '',
  별점 = 0,
  작성일 = '',
  내용 = '',
  태그 = '',
  플랫폼 = '',
  ...props
}: HorizontalCardProps) => {
  return (
    <Card
      className="group relative h-[220px] w-[547px] bg-white p-16 shadow-card"
      {...props}
    >
      {/* 플랫폼 아이콘 */}
      <div className="absolute right-[16px] top-[21px]">
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
      {/* 작성자, 작성일, 별점 Text */}
      <div className="flex h-[26px] w-[515px] items-center justify-between">
        <div className="flex w-[388px] flex-col items-start gap-[2px] detail2-semibold">
          <div>{작성자}</div>
          <div className="text-grayscale-300">{작성일.slice(0, 10)}</div>
        </div>
        <div className="mr-[24px] flex items-center gap-[2px] body3-bold">
          <Rating
            emptyStyle={{ display: 'flex' }}
            fillStyle={{ display: '-webkit-inline-box' }}
            initialValue={별점}
            size={16}
            allowFraction
            readonly
          />
          {별점}
        </div>
      </div>
      {/* 내용 Text */}
      <div className="mt-[8px] line-clamp-4 flex h-[66px] flex-row body3-medium">
        {내용}
      </div>
      {/* 태그, 타이틀 Text */}
      <div className="flex w-full justify-between pt-[22px]">
        <div className="flex max-h-[54px] max-w-[254px] flex-wrap items-start gap-[6px] overflow-hidden detail1-semibold">
          {태그.split(',').map(item => {
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
        <div className="flex w-[255px] items-center justify-end">
          <div className="line-clamp-2 text-blue-300 detail2-semibold">
            {타이틀}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HorizontalCard;
