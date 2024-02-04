'use client';

import { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Pentip from 'assets/icons/designlarge.svg';
import Search from 'assets/icons/search.svg';
import { LandScapeCard } from 'components/Card';
import LectureDialog from 'components/Dialog/LectureDialog';
import SideBar from 'components/SideBar';
import { Input } from 'components/ui/input';
import { RadioGroup, RadioGroupItem } from 'components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'components/ui/select';
import { CategoryData } from 'constants/category';
import { useGetInfiniteLectures } from 'hooks/reactQuery/lectures/query';
import useIntersection from 'hooks/useIntersection';

function Lectures() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [sortValue, setSortValue] = useState('');

  const searchParams = useSearchParams();

  const mainCategoryIdValue = searchParams.get('mainCategoryId') ?? '';
  const subCategoryIdValue = searchParams.get('subCategoryId') ?? '';
  const searchKeywordValue = searchParams.get('searchKeyword') ?? '';

  const params = {
    mainCategoryId: mainCategoryIdValue,
    subCategoryId: subCategoryIdValue,
    searchKeyword: searchKeywordValue,
    size: 10,
    sort: sortValue,
  };

  const { data, fetchNextPage, hasNextPage, isFetching, isSuccess } = useGetInfiniteLectures(params, {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.data.data),
      pageParams: data.pageParams,
    }),
  });

  const lectures = useMemo(() => {
    return data?.pages.flatMap((page) => page.lectures);
  }, [data]);

  const totalElements = useMemo(() => {
    return data?.pages[0].totalElements;
  }, [data]);

  const ref = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) fetchNextPage();
  });

  const options = CategoryData.find((item) => item.id === Number(mainCategoryIdValue));

  return (
    <div className="bg-gradient-main">
      <div className="container flex gap-32 py-[54px]">
        {/* 카테고리 사이드바 */}
        <div>
          <SideBar />
        </div>
        {/* 강의 검색 결과 섹션 */}
        <div className="flex w-full flex-col">
          <div className="flex flex-col gap-[20px]">
            {/* 검색 타이틀 */}
            <div className="flex items-center gap-8 H4-bold">
              {options?.mainCategoryIcon ?? <Pentip />}
              {searchKeywordValue || options?.main}
            </div>
            {/* 라디오 버튼 & 검색창 */}
            <div className="flex w-full flex-1 justify-between">
              <div className="flex">
                <RadioGroup
                  value={
                    options?.sub
                      .filter((item) => item[1] === Number(subCategoryIdValue))
                      .flatMap((item) => item)[0]
                      ?.toString() ?? '전체강의'
                  }
                >
                  {options?.sub.map((item) => {
                    return (
                      <RadioGroupItem
                        variant="lecture"
                        key={item[0]}
                        value={item[0] as string}
                        id={item[0] as string}
                        onClick={
                          searchKeywordValue
                            ? () => {}
                            : () => {
                                router.push(`/lectures?mainCategoryId=${mainCategoryIdValue}&subCategoryId=${item[1]}`);
                              }
                        }
                      >
                        {item[0]}
                      </RadioGroupItem>
                    );
                  })}
                </RadioGroup>
              </div>
              <div className="relative h-[32px] w-[190px] body3-medium">
                <Input
                  variant="search"
                  size="sm"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      router.push(`/lectures?searchKeyword=${inputValue}`);
                    }
                  }}
                  placeholder="전체 강의 검색"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center border-l border-grayscale-200 p-8"
                  onClick={() => {
                    router.push(`/lectures?searchKeyword=${inputValue}`);
                  }}
                >
                  <Search />
                </button>
              </div>
            </div>
            {/* 검색 결과 텍스트 & 필터 드롭다운 */}
            <div className="flex items-end justify-between">
              <div className="text-grayscale-700 body3-medium">{totalElements ?? 0}개의 검색결과를 찾았어요</div>
              <Select
                onValueChange={(value) => {
                  setSortValue(value);
                }}
              >
                <SelectTrigger>
                  <SelectValue defaultValue={sortValue ?? 'title,desc'} placeholder="추천순" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title,desc">추천순</SelectItem>
                  <SelectItem value="price,desc">가격 높은순</SelectItem>
                  <SelectItem value="price,asc">가격 낮은순</SelectItem>
                  <SelectItem value="review,desc">후기 많은순</SelectItem>
                  <SelectItem value="bookmark,desc">북마크순</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* 강의 목록 */}
          {isSuccess && totalElements === 0 ? (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <span className="text-grayscale-800 body1-bold">검색 결과가 없습니다.</span>
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-3 gap-16">
              {lectures?.map((lecture) => (
                <LectureDialog
                  key={lecture.id}
                  강의ID={lecture.id}
                  강사명={lecture.name}
                  강의명={lecture.title}
                  가격={lecture.price}
                  리뷰수={lecture.reviewCount}
                  별점={lecture.averageScore ?? 0}
                  플랫폼={lecture.source}
                  URL={lecture.url}
                  이미지={lecture.imageUrl}
                  추천후기={
                    lecture.reviews?.map((review) => {
                      return {
                        타이틀: lecture.title,
                        작성자: review.nickname,
                        별점: review.score,
                        작성일: review.createdDate,
                        내용: review.content,
                        태그: review.tags.join(','),
                        플랫폼: lecture.source,
                      };
                    }) ?? []
                  }
                  태그그룹={lecture.tagGroups ?? []}
                >
                  <LandScapeCard
                    강사={lecture.name}
                    타이틀={lecture.title}
                    가격={lecture.price}
                    플랫폼={lecture.source}
                    이미지={lecture.imageUrl}
                    후기수={lecture.reviewCount}
                  />
                </LectureDialog>
              ))}
              <div ref={ref} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Lectures;
