import Class101 from 'assets/icons/platform/class101-16.svg';
import Coloso from 'assets/icons/platform/coloso-16.svg';
import FastCampus from 'assets/icons/platform/fastcampus-16.svg';
import Inflearn from 'assets/icons/platform/inflearn-16.svg';
import Star from 'assets/icons/rating/star.svg';
import { Card, CardProps } from 'components/ui/card';
import { Rating } from 'react-simple-star-rating';
import { cn } from 'utils/twUtils';

interface HorizontalCardProps extends CardProps {
  타이틀: string;
  작성자: string;
  별점: number;
  작성일: string;
  내용: string;
  태그: string;
  플랫폼: string;
  variant?: 'default' | 'lecture';
  className?: string;
}

function HorizontalCard({
  타이틀 = '',
  작성자 = '',
  별점 = 0,
  작성일 = '',
  내용 = '',
  태그 = '',
  플랫폼 = '',
  variant = 'default',
  className,
  ...props
}: HorizontalCardProps) {
  return (
    <Card
      className={cn(
        `group relative bg-white p-16 shadow-card ${variant === 'lecture' ? 'w-full' : 'h-[220px] w-[547px]'}`,
        className
      )}
      {...props}
    >
      {/* 플랫폼 아이콘 */}
      <div className="absolute right-[16px] top-[21px]">
        {variant === 'lecture'
          ? null
          : (() => {
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
      <div className={`flex h-[26px] items-center justify-between ${variant === 'lecture' ? 'w-full' : 'w-[515px]'} `}>
        <div
          className={`flex  flex-col items-start gap-[2px] detail2-semibold ${
            variant === 'lecture' ? 'w-full' : 'w-[388px]'
          } `}
        >
          <div>{작성자}</div>
          <div className="text-grayscale-300">{작성일}</div>
        </div>
        <div
          className={`flex items-center gap-[4px] ${variant === 'lecture' ? 'detail2-bold' : 'mr-[24px] body3-bold'}`}
        >
          {variant === 'lecture' ? (
            <Star />
          ) : (
            <Rating
              emptyStyle={{ display: 'flex' }}
              fillStyle={{ display: '-webkit-inline-box' }}
              initialValue={별점}
              size={16}
              allowFraction
              readonly
            />
          )}
          {별점.toFixed(1)}
        </div>
      </div>
      {/* 내용 Text */}
      <div
        className={`mb-[16px] mt-[8px] ${
          variant === 'lecture' ? 'detail1-medium' : 'h-[88px] body3-medium'
        } line-clamp-5 flex  w-full flex-row text-ellipsis`}
      >
        {내용}
      </div>
      {/* 태그, 타이틀 Text */}
      <div className="flex w-full justify-between">
        <div
          className={`flex flex-wrap items-start gap-[6px] overflow-hidden detail1-semibold ${
            variant === 'lecture' ? 'max-h-24 max-w-[200px] overflow-hidden' : 'max-h-[54px] max-w-[254px]'
          }`}
        >
          {태그.split(',').map((item) => {
            return (
              <div
                className={`inline-flex items-center justify-center rounded-[2px] bg-grayscale-50  text-grayscale-600 ${
                  variant === 'lecture' ? 'px-[4px] py-[2px] detail3-bold' : 'detail2-medium px-[8px] py-[4px]'
                }`}
                key={item}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className={`flex items-center justify-end ${variant === 'lecture' ? '' : 'w-[255px]'}`}>
          <div className={`text-blue-300 detail2-semibold ${variant === 'lecture' ? 'line-clamp-1' : 'line-clamp-2'}`}>
            {타이틀}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default HorizontalCard;
