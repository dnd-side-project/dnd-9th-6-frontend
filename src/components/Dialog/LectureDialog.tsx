import React, { useState } from 'react';
import Image from 'next/image';
import Bookmark2 from 'assets/icons/glass/bookmark.svg';
import Career from 'assets/icons/glass/career.svg';
import Like from 'assets/icons/glass/like.svg';
import Notification from 'assets/icons/glass/notification.svg';
import { HorizontalCard } from 'components/Card';
import { TooltipIcon } from 'components/TooltipIcon';
import { Button } from 'components/ui/button';
import { CheckboxButton } from 'components/ui/checkbox-button';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from 'components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from 'components/ui/form';
import { Progress } from 'components/ui/progress';
import { RadioGroup } from 'components/ui/radio-group';
import { ScrollArea } from 'components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'components/ui/tooltip';
import { Bookmark, MoveDownRightIcon, PencilIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import * as DialogPrimitive from '@radix-ui/react-dialog';

interface LectureDialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
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
  태그그룹: {
    태그이름: string;
    태그수: number;
  }[][];
  contentProps?: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
}

type LectureDialogStep = 'Lecture' | 'Review' | 'DetailReview';

const LectureDialog = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Root>, LectureDialogProps>(
  (
    {
      강사명 = '둡',
      강의명 = '연필 하나만으로 모든 분위기를 담아내요, 둡의 연필 드로잉',
      가격 = '100,000원',
      플랫폼 = 'fastcampus',
      이미지 = '',
      별점 = 4.5,
      리뷰수 = 100,
      추천후기 = [],
      children,
      contentProps,
      ...props
    },
    ref
  ) => {
    const [step, setStep] = useState<LectureDialogStep>('Lecture');

    const FormSchema = z.object({
      score: z.number().min(0.5, { message: '별점을 선택해주세요' }),
      tags1: z.array(z.string()).min(1, { message: '최소 한개 이상 선택해주세요 :)' }),
      tags2: z.array(z.string()).min(1, { message: '최소 한개 이상 선택해주세요 :)' }),
      tags3: z.array(z.string()).min(1, { message: '최소 한개 이상 선택해주세요 :)' }),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        score: 0,
        tags1: [],
      },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
      const { score, tags } = data;
      const submitData = {
        lectureId: 1,
        score,
        tags,
        content: '좋은 강의였습니다.',
      };
    }

    return (
      <Dialog {...props}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="z-10 flex h-[534px] w-[837px] flex-col bg-gray-100" ref={ref} {...contentProps}>
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
                <div className="line-clamp-2 body2-semibold">{강의명}</div>
              </div>
              <div className="flex items-end body3-extrabold">{가격}</div>
              <div className="flex items-end gap-8">
                <div>
                  <Button
                    className="flex items-center gap-[4px]"
                    size="sm"
                    variant="outlined"
                    onClick={() => {
                      setStep('Review');
                    }}
                  >
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
          {step === 'Lecture' && (
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
                  <div className="flex h-full w-[360px] flex-col items-center justify-center">
                    {추천후기 && 추천후기.length > 0 ? (
                      <ScrollArea className="h-[300px] pt-12">
                        {추천후기.map((review) => (
                          <HorizontalCard className="mb-8" variant="lecture" key={review.작성자} {...review} />
                        ))}
                      </ScrollArea>
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-8 text-center body3-semibold">
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
          )}
          {step === 'Review' && (
            <div className="relative flex h-full flex-col gap-16 overflow-hidden px-20 py-20">
              <div className="absolute left-32 top-32">
                <div className="H5-bold">강의의 어떤 점이 좋으셨나요?</div>
                <div className="detail1-semibold">이 강의에 어울리는 키워드를 골라주세요.</div>
              </div>
              <div className="flex w-full items-center justify-center pt-32">
                <div className="flex flex-col items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="text-grayscale-400 detail2-semibold">별점 평가</div>
                      </TooltipTrigger>
                      <TooltipContent className="m-[1px] inline-flex">별점을 드래그해 평가를 남겨주세요</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <div className="flex flex-wrap">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                          control={form.control}
                          name="score"
                          render={() => (
                            <FormItem className="flex justify-center gap-[64px]">
                              <FormField
                                control={form.control}
                                name="score"
                                render={({ field }) => {
                                  return (
                                    <FormItem>
                                      <FormControl>
                                        <div className="flex items-center justify-center">
                                          <Rating
                                            emptyStyle={{ display: 'flex' }}
                                            fillStyle={{ display: '-webkit-inline-box' }}
                                            initialValue={0}
                                            size={24}
                                            allowFraction
                                            onClick={(value) => {
                                              field.onChange(value);
                                            }}
                                            showTooltip
                                            tooltipClassName="detail2-semibold absolute"
                                            tooltipStyle={{
                                              backgroundColor: '#678afe',
                                              color: '#fff',
                                            }}
                                            tooltipDefaultText="별점을 선택해주세요"
                                          />
                                        </div>
                                      </FormControl>
                                    </FormItem>
                                  );
                                }}
                              />
                              <FormMessage className="absolute top-[90px]" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="tags1"
                          render={() => (
                            <FormItem className="flex justify-center gap-[64px] pt-32">
                              {tagsItems.map((item) => (
                                <div key={item.label} className="flex flex-col items-center justify-start gap-8">
                                  <div className="text-blue-500 body2-semibold">{item.label}</div>
                                  <RadioGroup>
                                    {item.items.map((tag) => {
                                      return (
                                        <FormField
                                          key={tag}
                                          control={form.control}
                                          name="tags1"
                                          render={({ field }) => {
                                            return (
                                              <FormItem>
                                                <FormControl>
                                                  <CheckboxButton
                                                    checked={field.value?.includes(tag)}
                                                    onCheckedChange={(checked) => {
                                                      return checked
                                                        ? field.onChange([...field.value, tag])
                                                        : field.onChange(field.value.filter((value) => value !== tag));
                                                    }}
                                                  >
                                                    {tag}
                                                  </CheckboxButton>
                                                </FormControl>
                                              </FormItem>
                                            );
                                          }}
                                        />
                                      );
                                    })}
                                  </RadioGroup>
                                </div>
                              ))}
                              <FormMessage className="absolute bottom-[120px] right-[100px]" />
                            </FormItem>
                          )}
                        />
                        <div className="flex gap-8 pt-32">
                          <Button
                            size="lg"
                            variant="secondary"
                            onClick={() => {
                              setStep('Lecture');
                            }}
                          >
                            이전으로
                          </Button>
                          <Button type="submit" size="lg" variant="primary">
                            다음으로
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  }
);

LectureDialog.displayName = 'LectureDialog';

export default LectureDialog;

const tagsItems = [
  {
    label: '강사에 대해',
    items: ['듣기 좋은 목소리', '뛰어난 강의력', '매우 적극적', '빠른 답변'],
  },
  {
    label: '강의 내용에 대해',
    items: ['커리큘럼과 똑같아요', '구성이 알차요', '내용이 자세해요', '이해가 잘돼요'],
  },
  {
    label: '강의 후 느끼는 변화',
    items: ['도움이 많이 되었어요', '보통이에요', '도움이 안되었어요'],
  },
];
