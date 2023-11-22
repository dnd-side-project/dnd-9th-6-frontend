import Image from 'next/image';
import Bookmark2 from 'assets/icons/glass/bookmark.svg';
import Career from 'assets/icons/glass/career.svg';
import Like from 'assets/icons/glass/like.svg';
import Notification from 'assets/icons/glass/notification.svg';
import { HorizontalCard } from 'components/Card';
import { TooltipIcon } from 'components/TooltipIcon';
import { Button } from 'components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from 'components/ui/dialog';
import { Progress } from 'components/ui/progress';
import { ScrollArea } from 'components/ui/scroll-area';
import { Bookmark, MoveDownRightIcon, PencilIcon } from 'lucide-react';
import { Rating } from 'react-simple-star-rating';

interface LectureDialogProps {
  강사명: string;
  강의명: string;
  가격: string;
  플랫폼: string;
  이미지?: string;
  별점: number;
  리뷰수: number;
  추천후기: {
    타이틀: string;
    작성자: string;
    별점: number;
    작성일: string;
    내용: string;
    태그: string;
    플랫폼: string;
  }[];
}

function LectureDialog({
  강사명 = '둡',
  강의명 = '연필 하나만으로 모든 분위기를 담아내요, 둡의 연필 드로잉',
  가격 = '100,000원',
  플랫폼 = 'fastcampus',
  이미지 = '',
  별점 = 4.5,
  리뷰수 = 100,
  추천후기 = [],
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
                {강사명}
              </div>
              <div className="body2-semibold">{강의명}</div>
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
        <div className="flex h-full flex-col gap-16 overflow-hidden px-20 py-20">
          <div className="flex w-full justify-center">
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
          <div className="flex w-full gap-16">
            <div className="flex flex-col">
              <div className="flex items-center gap-8 detail1-bold">
                <Like /> 많은 추천을 받은 후기
              </div>
              <div className="flex w-[360px] flex-col items-center justify-center">
                {추천후기 && 추천후기.length > 0 ? (
                  <ScrollArea className="h-[300px] pt-12">
                    {추천후기.map((review) => (
                      <HorizontalCard className="mb-8" variant="lecture" key={review.작성자} {...review} />
                    ))}
                  </ScrollArea>
                ) : (
                  <div className=" gap-8 text-center body3-semibold">
                    <Notification />
                    아직 작성된 후기가 없어요
                    <br />
                    후기가 등록되면 알려드릴게요!
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full flex-col gap-12">
              <div className="flex w-full gap-16">
                <div className="flex w-full flex-col">
                  <div className="flex items-center gap-8 pb-12 detail1-bold">
                    <Bookmark2 /> 강의 내용은 이러해요
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <Progress variant="primary_1" label="커리큘럼과 똑같아요" count={9} value={80}>
                      Progress
                    </Progress>
                    <Progress variant="primary_2" label="구성이 알차요" count={9} value={60}>
                      Progress
                    </Progress>
                    <Progress variant="primary_3" label="내용이 자세해요" count={9} value={50}>
                      Progress
                    </Progress>
                    <Progress variant="primary_4" label="이해가 잘돼요" count={9} value={30}>
                      Progress
                    </Progress>
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <div className="flex items-center gap-8 pb-12 detail1-bold">
                    <Career /> 강사님은 이러해요
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <Progress variant="secondary_1" label="커리큘럼과 똑같아요" count={9} value={80}>
                      Progress
                    </Progress>
                    <Progress variant="secondary_2" label="구성이 알차요" count={9} value={60}>
                      Progress
                    </Progress>
                    <Progress variant="secondary_3" label="내용이 자세해요" count={9} value={50}>
                      Progress
                    </Progress>
                    <Progress variant="secondary_4" label="이해가 잘돼요" count={9} value={30}>
                      Progress
                    </Progress>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col">
                <div className="flex items-center gap-8 pb-12 detail1-bold">
                  <Career /> 강의 후, 나의 변화는?
                </div>
                <div className="flex flex-col gap-[4px]">
                  <Progress variant="blue_1" label="커리큘럼과 똑같아요" count={9} value={80}>
                    Progress
                  </Progress>
                  <Progress variant="blue_2" label="구성이 알차요" count={9} value={60}>
                    Progress
                  </Progress>
                  <Progress variant="blue_3" label="내용이 자세해요" count={9} value={50}>
                    Progress
                  </Progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LectureDialog;
