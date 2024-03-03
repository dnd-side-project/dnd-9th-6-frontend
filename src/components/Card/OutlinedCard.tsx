import Class101 from 'assets/icons/platform/class101-16.svg';
import Coloso from 'assets/icons/platform/coloso-16.svg';
import FastCampus from 'assets/icons/platform/fastcampus-16.svg';
import Inflearn from 'assets/icons/platform/inflearn-16.svg';
import { CardProps } from 'components/ui/card';

interface OutlinedCardProps extends CardProps {
  강사: string;
  타이틀: string;
  플랫폼: string;
  이미지: string;
  fixed?: boolean;
}

function OutlinedCard({
  강사 = '',
  타이틀 = '',
  플랫폼 = '',
  이미지 = '',
  fixed = false,
  ...props
}: OutlinedCardProps) {
  return (
    <div className={`flex h-[88px] ${fixed ? 'w-[458px]' : 'w-full'} items-start gap-8 bg-transparent p-8`} {...props}>
      {/* 이미지 */}
      <div className="h-[72px] w-[103px] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${이미지})` }} />

      <div className="flex w-[262px] flex-col gap-8">
        {/* 플랫폼 아이콘, 강사 Text */}
        <div className="flex">
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
          <div className="ml-8 text-grayscale-300 detail1-semibold">{강사}</div>
        </div>
        {/* 타이틀 Text */}
        <div className="line-clamp-2 h-[48px] w-full body2-bold">{타이틀}</div>
      </div>
    </div>
  );
}

export default OutlinedCard;
