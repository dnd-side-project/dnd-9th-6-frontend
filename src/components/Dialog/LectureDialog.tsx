'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import REVIEW_API from 'apis/review';
import { ReviewRequest } from 'apis/review/types';
import Bookmark2 from 'assets/icons/glass/bookmark.svg';
import Career from 'assets/icons/glass/career.svg';
import Completed from 'assets/icons/glass/completed.svg';
import Like from 'assets/icons/glass/like.svg';
import Notification from 'assets/icons/glass/notification.svg';
import { HorizontalCard } from 'components/Card';
import { TooltipIcon } from 'components/TooltipIcon';
import { Button } from 'components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from 'components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from 'components/ui/form';
import { Progress } from 'components/ui/progress';
import { RadioGroup, RadioGroupItem } from 'components/ui/radio-group';
import { ScrollArea } from 'components/ui/scroll-area';
import { Textarea } from 'components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'components/ui/tooltip';
import { Bookmark, Loader2, MoveDownRightIcon, PencilIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import { useIsSignedIn } from 'store/auth';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface LectureDialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  강의ID: number;
  강사명: string;
  강의명: string;
  가격: string;
  플랫폼: string;
  URL: string;
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
    tags: {
      name: string;
      count: number;
    }[];
  }[];
  contentProps?: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
}

type LectureDialogStep = 'Lecture' | 'Review' | 'DetailReview' | 'Completed';

const LectureDialog = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Root>, LectureDialogProps>(
  (
    {
      강의ID,
      강사명 = '둡',
      강의명 = '연필 하나만으로 모든 분위기를 담아내요, 둡의 연필 드로잉',
      가격 = '100,000원',
      플랫폼 = 'fastcampus',
      URL = '',
      이미지 = '',
      별점 = 4.5,
      리뷰수 = 100,
      추천후기 = [],
      태그그룹 = [],
      children,
      contentProps,
      ...props
    },
    ref
  ) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const [step, setStep] = useState<LectureDialogStep>('Lecture');
    const [reviewData, setReviewData] = useState<ReviewRequest>();

    const isSingnedIn = useIsSignedIn();

    const { mutate: postReview, isLoading: isPostReviewLoading } = useMutation(REVIEW_API.post, {
      onSuccess: () => {
        setStep('Completed');
      },
      onError: (error: {
        response: {
          data: {
            code: number;
            message: string;
          };
        };
      }) => {
        // 이미 리뷰를 작성한 경우
        if (error.response.data.code === -3000) {
          // eslint-disable-next-line no-alert
          alert(error.response.data.message);
          setStep('Lecture');
        }
      },
    });

    const ReviewFormSchema = z.object({
      score: z.number({ required_error: '별점을 선택해주세요' }),
      tags1: z.enum([...tagsItems[0].items], {
        required_error: '강사에 대해 태그를 선택해주세요',
      }),
      tags2: z.enum([...tagsItems[1].items], {
        required_error: '강의 내용에 대해 태그를 선택해주세요',
      }),
      tags3: z.enum([...tagsItems[2].items], {
        required_error: '강의 후 느끼는 변화 태그를 선택해주세요',
      }),
    });

    const DetailReviewFormSchema = z.object({
      content: z
        .string()
        .min(10, {
          message: '10글자 이상 입력해주세요',
        })
        .max(300, {
          message: '300자를 초과할 수 없습니다',
        }),
    });

    const reviewform = useForm<z.infer<typeof ReviewFormSchema>>({
      resolver: zodResolver(ReviewFormSchema),
    });

    const detailReviewForm = useForm<z.infer<typeof DetailReviewFormSchema>>({
      resolver: zodResolver(DetailReviewFormSchema),
      defaultValues: {
        content: '',
      },
    });

    function onReviewSubmit(data: z.infer<typeof ReviewFormSchema>) {
      const { score, tags1, tags2, tags3 } = data;
      const tags = [tags1, tags2, tags3].filter((tag) => tag !== undefined) as string[];
      const submitData = {
        lectureId: 강의ID,
        score,
        tags,
      } as Partial<ReviewRequest>;
      setReviewData(submitData as ReviewRequest);
      setStep('DetailReview');
    }

    function onSubmit(data: z.infer<typeof DetailReviewFormSchema>) {
      const submitData = {
        ...reviewData,
        content: data.content,
      } as ReviewRequest;
      postReview(submitData);
    }

    const totalTagsCount = useMemo(() => {
      return 태그그룹.map((group) => {
        return group.tags.reduce((acc, cur) => {
          return acc + cur.count;
        }, 0);
      });
    }, [태그그룹]);

    return (
      <Dialog {...props}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent
          onInteractOutside={() => {
            setStep('Lecture');
            queryClient.invalidateQueries({ queryKey: ['lectures'] });
          }}
          className="z-10 flex h-[534px] w-[837px] flex-col bg-gray-100"
          ref={ref}
          {...contentProps}
        >
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
                      if (!isSingnedIn) {
                        alert('로그인 후 이용해주세요');
                        router.push('/login');
                        return;
                      }
                      setStep('Review');
                    }}
                  >
                    후기 남기기
                    <PencilIcon className="h-16 w-16" />
                  </Button>
                </div>
                <div>
                  <Button className="flex items-center gap-[4px]" size="sm" variant="outlined">
                    <Link href={URL} target="_blank">
                      사이트로 이동
                    </Link>
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
                        {태그그룹[0].tags.map((tag, index) => {
                          return (
                            <Progress
                              key={tag.name}
                              variant={
                                `primary_${index + 1}` as `${'primary_1' | 'primary_2' | 'primary_3' | 'primary_4'}`
                              }
                              label={tag.name}
                              count={tag.count}
                              value={(tag.count / totalTagsCount[0]) * 100}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex items-center gap-8 pb-12 detail1-bold">
                        <Career /> 강사님은 이러해요
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        {태그그룹[1].tags.map((tag, index) => {
                          return (
                            <Progress
                              key={tag.name}
                              variant={
                                `secondary_${index + 1}` as `${
                                  | 'secondary_1'
                                  | 'secondary_2'
                                  | 'secondary_3'
                                  | 'secondary_4'}`
                              }
                              label={tag.name}
                              count={tag.count}
                              value={(tag.count / totalTagsCount[1]) * 100}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col">
                    <div className="flex items-center gap-8 pb-12 detail1-bold">
                      <Career /> 강의 후, 나의 변화는?
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      {태그그룹[1].tags.map((tag, index) => {
                        return (
                          <Progress
                            key={tag.name}
                            variant={`blue_${index + 1}` as `${'blue_1' | 'blue_2' | 'blue_3'}`}
                            label={tag.name}
                            count={tag.count}
                            value={(tag.count / totalTagsCount[2]) * 100}
                          />
                        );
                      })}
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
                    <Form {...reviewform}>
                      <form onSubmit={reviewform.handleSubmit(onReviewSubmit)}>
                        <FormField
                          control={reviewform.control}
                          name="score"
                          render={() => (
                            <FormItem className="flex justify-center gap-[64px]">
                              <FormField
                                control={reviewform.control}
                                name="score"
                                render={({ field }) => {
                                  return (
                                    <FormItem>
                                      <FormControl>
                                        <div className="flex items-center justify-center">
                                          <Rating
                                            emptyStyle={{ display: 'flex' }}
                                            fillStyle={{ display: '-webkit-inline-box' }}
                                            initialValue={field.value}
                                            size={24}
                                            allowFraction
                                            onClick={(value) => {
                                              field.onChange(value);
                                            }}
                                            {...field}
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
                        <div className="flex justify-between">
                          {tagsItems.map((item, index) => (
                            <FormField
                              key={item.label}
                              control={reviewform.control}
                              name={`tags${index + 1}` as 'tags1' | 'tags2' | 'tags3'}
                              render={(field) => (
                                <FormItem className="flex justify-center gap-[64px] pt-32">
                                  <FormControl>
                                    <RadioGroup onValueChange={field.field.onChange} defaultValue={field.field.value}>
                                      <div className="flex flex-col items-center justify-start gap-8">
                                        <div className="text-blue-500 body2-semibold">{item.label}</div>
                                        {item.items.map((tag) => {
                                          return (
                                            <RadioGroupItem variant="review" key={tag} value={tag}>
                                              {tag}
                                            </RadioGroupItem>
                                          );
                                        })}
                                      </div>
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage
                                    className="absolute right-[100px]"
                                    style={{
                                      bottom: `${100 + index * 16}px`,
                                    }}
                                  />
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
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
                          <Button size="lg" variant="primary" type="submit">
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
          {step === 'DetailReview' &&
            (isPostReviewLoading ? (
              <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="text-grayscale-800 body1-semibold">후기가 올라가고 있어요!</div>
                <Loader2 className="h-32 w-32 animate-spin text-blue-500" />
              </div>
            ) : (
              <div className="relative flex h-full flex-col justify-center gap-16 overflow-hidden px-20 py-20">
                <div className="absolute left-32 top-32">
                  <div className="H5-bold">강의의 어떤 점이 좋으셨나요?</div>
                  <div className="detail1-semibold">여러분의 수강 후기를 자유롭게 남겨주세요.</div>
                </div>
                <div className="flex flex-col items-center pt-32">
                  <Form {...detailReviewForm}>
                    <form onSubmit={detailReviewForm.handleSubmit(onSubmit)} className="space-y-6 w-2/3">
                      <FormField
                        control={detailReviewForm.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem className="flex flex-col items-center">
                            <FormControl>
                              <Textarea
                                className="flex h-[200px] w-[400px] resize-none"
                                placeholder="간단한 후기를 작성해 주시면 클래스 코프가 더욱 풍부해질 거예요!"
                                {...field}
                              />
                            </FormControl>
                            <div className="flex w-[400px] flex-col items-end">
                              <span className={`${field.value.length > 300 ? 'text-red' : 'text-grayscale-600'}`}>
                                {field.value.length} / 300
                              </span>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      <div className="flex gap-8 pt-32">
                        <Button
                          size="lg"
                          variant="secondary"
                          onClick={() => {
                            setStep('Review');
                          }}
                        >
                          이전으로
                        </Button>
                        <Button
                          type="submit"
                          size="lg"
                          variant="primary"
                          disabled={!detailReviewForm.formState.isDirty}
                        >
                          후기 작성 완료
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            ))}
          {step === 'Completed' && (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <Completed />
              <div className="text-center text-grayscale-800 body1-semibold">
                클래스코프의 소중한 후기가 되었어요! <br />✨ 이제, 강의를 탐색하러 가보실까요?! ✨
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
] as const;
