import Image from 'next/image';
import Like from 'assets/icons/glass/like.svg';
import Notification from 'assets/icons/glass/notification.svg';
import { TooltipIcon } from 'components/TooltipIcon';
import { Button } from 'components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from 'components/ui/dialog';
import { Bookmark, MoveDownRightIcon, PencilIcon } from 'lucide-react';
import { Rating } from 'react-simple-star-rating';

interface LectureDialogProps {
  가격: string;
  플랫폼: string;
  이미지?: string;
  별점: number;
  리뷰수: number;
}

function LectureDialog({
  가격 = '100,000원',
  플랫폼 = 'fastcampus',
  이미지 = '',
  별점 = 4.5,
  리뷰수 = 100,
  ...props
}: LectureDialogProps) {
  return (
    <Dialog defaultOpen {...props}>
      <DialogTrigger asChild>
        <Button variant="primary">Share</Button>
      </DialogTrigger>
      <DialogContent className="flex h-[534px] w-[837px] flex-col bg-gray-100">
        <DialogHeader className="flex h-[91px] w-full bg-white">
          <div className="relative w-[148px]">
            <Image
              src={이미지}
              alt="cover"
              className="h-full w-full object-center"
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="flex h-full w-full gap-8 p-12">
            <div className="flex w-[248px] flex-col gap-8">
              <div className="flex items-center gap-8 text-grayscale-300 detail2-semibold">
                {(() => {
                  switch (플랫폼) {
                    case 'fastcampus':
                      return <TooltipIcon variant="fastcampus" size="16" />;
                    case 'inflearn':
                      return <TooltipIcon variant="inflearn" size="16" />;
                    case 'coloso':
                      return <TooltipIcon variant="coloso" size="16" />;
                    case 'class101':
                      return <TooltipIcon variant="class101" size="16" />;
                    default:
                      return null;
                  }
                })()}
                일러스트레이트 둡
              </div>
              <div className="body2-semibold">연필 하나만으로 모든 분위기를 담아내요, 둡의 연필 드로잉</div>
            </div>
            <div className="flex items-end body3-extrabold">{가격}</div>
            <div className="flex items-end gap-8">
              <div>
                <Button className="flex items-center gap-[4px]" size="sm" variant="outlined">
                  후기 남기기
                  <PencilIcon className="h-16 w-16" />
                </Button>
              </div>
              <div>
                <Button className="flex items-center gap-[4px]" size="sm" variant="outlined">
                  사이트로 이동
                  <MoveDownRightIcon className="h-16 w-16" />
                </Button>
              </div>
              <div>
                <Button className="flex items-center gap-[4px]" size="sm" variant="outlined">
                  강의 찜하기
                  <Bookmark className="h-16 w-16" />
                </Button>
              </div>
            </div>
          </div>
        </DialogHeader>
        <div className="flex w-full justify-center pt-20">
          <div className="flex flex-col items-center">
            <div className="H4-bold">{별점}</div>
            <div className="text-grayscale-400 detail2-semibold">{`총 ${리뷰수}개의 리뷰`}</div>
            <div>
              <Rating
                emptyStyle={{ display: 'flex' }}
                fillStyle={{ display: '-webkit-inline-box' }}
                initialValue={별점}
                size={24}
                allowFraction
                readonly
              />
            </div>
          </div>
        </div>
        <div className="flex h-full w-full px-20 pt-12">
          <div className="flex flex-col">
            <div className="flex items-center gap-8 detail1-bold">
              <Like /> 많은 추천을 받은 후기
            </div>
            <div className="flex h-full w-[360px] flex-col items-center justify-center gap-8 text-center body3-semibold">
              <Notification />
              아직 작성된 후기가 없어요
              <br />
              후기가 등록되면 알려드릴께요!
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LectureDialog;
