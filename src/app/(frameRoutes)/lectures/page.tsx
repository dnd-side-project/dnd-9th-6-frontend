'use client';

import SideBar from 'components/SideBar';
import Pentip from 'assets/icons/designlarge.svg';
import Search from 'assets/icons/search.svg';
import { Input } from 'components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/ui/select';
import { RadioGroup, RadioGroupItem } from 'components/ui/radio-group';
import { useGetLecturesParameter } from 'hooks/reactQuery/lectures/query';
import { LandScapeCard } from 'components/Card';
import { CategoryData } from 'constants/category';

const Lectures = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  const searchParams = useSearchParams();

  const mainCategoryIdValue = searchParams.get('mainCategoryId') ?? '';
  const subCategoryIdValue = searchParams.get('subCategoryId') ?? '';
  const searchKeywordValue = searchParams.get('searchKeyword') ?? '';
  const pageValue = searchParams.get('page') ?? '';
  const sizeValue = searchParams.get('size') ?? '';
  const sortValue = searchParams.get('sort') ?? '';

  const { data } = useGetLecturesParameter({
    mainCategoryId: mainCategoryIdValue,
    subCategoryId: subCategoryIdValue,
    searchKeyword: searchKeywordValue,
    page: searchParams.get('page') ?? '',
    size: searchParams.get('size') ?? '',
    sort: searchParams.get('sort') ?? '',
  });

  const options = CategoryData.find(
    item => item.id === Number(mainCategoryIdValue)
  );

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
                <RadioGroup defaultValue="전체">
                  {options?.sub.map(item => {
                    return (
                      <RadioGroupItem
                        key={item[0]}
                        value={item[0] as string}
                        id={item[0] as string}
                        onClick={() => {
                          router.push(
                            `/lectures?mainCategoryId=${mainCategoryIdValue}&subCategoryId=${item[1]}`
                          );
                        }}
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
                  onChange={e => {
                    setInputValue(e.target.value);
                  }}
                  onKeyDown={e => {
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
              <div className="text-grayscale-700 body3-medium">
                {data?.totalElements ?? 0}개의 검색결과를 찾았어요
              </div>
              <Select
                onValueChange={value => {
                  router.push(
                    `/lectures?mainCategoryId=${mainCategoryIdValue}&subCategoryId=${subCategoryIdValue}&searchKeyword=${searchKeywordValue}&page=${pageValue}&size=${sizeValue}&sort=${value}`
                  );
                }}
              >
                <SelectTrigger>
                  <SelectValue
                    defaultValue={sortValue ?? 'title,desc'}
                    placeholder="추천순"
                  />
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
          <div className="mt-12 grid grid-cols-3 gap-16">
            {data?.lectures.map(lecture => (
              <LandScapeCard
                key={lecture.id}
                강사={lecture.name}
                타이틀={lecture.title}
                가격={lecture.price}
                플랫폼={lecture.source}
                이미지={lecture.imageUrl}
                후기수={lecture.reviewCount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
