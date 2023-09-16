/* eslint-disable react/jsx-pascal-case */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/accordion';
import { CategoryData } from 'constants/category';
import Link from 'next/link';

const SideBar = ({ ...props }) => {
  return (
    <div className="flex min-w-[192px] flex-col shadow-main" {...props}>
      {/* 아코디언 */}
      <Accordion type="single" collapsible className="bg-white">
        {CategoryData.map(data => {
          return (
            <AccordionItem key={data.main} value={data.main}>
              {/* 메인 카테고리 버튼 */}
              <AccordionTrigger className="rounded-[4px] hover:bg-grayscale-100 hover:text-grayscale-800 hover:body3-bold">
                <div className="flex gap-[4px]">
                  {data.sideBarIcon}
                  {data.main}
                </div>
              </AccordionTrigger>
              {/* 아코디언 패널 */}
              <AccordionContent className="rounded-[4px]">
                {data.sub?.map(sub => {
                  return (
                    // 서브 카테고리 버튼
                    <Link
                      key={sub[0]}
                      href={{
                        pathname: 'lectures',
                        query: {
                          mainCategoryId: data.id,
                          subCategoryId: sub[1],
                        },
                      }}
                    >
                      <button
                        type="button"
                        className="group flex w-full items-center justify-start bg-grayscale-50 px-32 py-8 hover:bg-grayscale-100"
                      >
                        <div className="text-grayscale-500 detail1-medium hover:detail1-bold group-hover:text-blue-500">
                          {sub[0]}
                        </div>
                      </button>
                    </Link>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default SideBar;
