'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Cog from 'assets/icons/cog.svg';
import Headset from 'assets/icons/headset.svg';
import Logout from 'assets/icons/logout.svg';
import Pencil from 'assets/icons/pencil.svg';
import Symbol from 'assets/icons/symbol-transparant.svg';
import { Button } from 'components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from 'components/ui/form';
import { Input } from 'components/ui/input';
import { Separator } from 'components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from 'components/ui/tabs';
import { ArrowRightIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useUserEmail, useUserImageUrl, useUserName } from 'store/user';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

function Lectures() {
  const router = useRouter();

  const userName = useUserName();
  const userEmail = useUserEmail();
  const userProfileImg = useUserImageUrl();

  const FormSchema = z.object({
    name: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    account: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <div className="bg-gradient-main">
      <div className="container flex gap-[84px] py-[54px]">
        {/* 카테고리 사이드바 */}
        <div>
          <Symbol />
          <div className="mb-24 H5-bold">
            안녕하세요, <span className="text-blue-500">{userName}</span>님!
          </div>
          <Tabs className="bg-white shadow-card">
            <TabsList className="flex w-[174px] flex-col gap-0">
              <TabsTrigger
                value="내 프로필"
                asChild
                className="justify-start text-grayscale-500 data-[state=active]:border-b-0 data-[state=active]:border-l-2 data-[state=active]:border-blue-500 data-[state=active]:bg-grayscale-50 data-[state=active]:text-blue-500"
              >
                <div className="flex cursor-pointer gap-8 px-16 py-12">
                  <Cog />
                  <p className="body3-bold">내 프로필</p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="내 후기"
                asChild
                className="justify-start text-grayscale-500 data-[state=active]:border-b-0 data-[state=active]:border-l-2 data-[state=active]:border-blue-500 data-[state=active]:bg-grayscale-50 data-[state=active]:text-blue-500"
              >
                <div className="flex cursor-pointer gap-8 px-16 py-12">
                  <Pencil />
                  <p className="body3-bold">내 후기</p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="문의하기"
                asChild
                className="justify-start text-grayscale-500 data-[state=active]:border-b-0 data-[state=active]:border-l-2 data-[state=active]:border-blue-500 data-[state=active]:bg-grayscale-50 data-[state=active]:text-blue-500"
              >
                <div className="flex cursor-pointer gap-8 px-16 py-12">
                  <Headset />
                  <p className="body3-bold">문의하기</p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="로그아웃"
                asChild
                className="justify-start text-grayscale-500 data-[state=active]:border-b-0 data-[state=active]:border-l-2 data-[state=active]:border-blue-500 data-[state=active]:bg-grayscale-50 data-[state=active]:text-blue-500"
              >
                <div className="flex cursor-pointer gap-8 px-16 py-12">
                  <Logout />
                  <p className="body3-bold">로그아웃</p>
                </div>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        {/* 강의 검색 결과 섹션 */}
        <div className="flex w-full flex-col bg-white p-32">
          <div className="H5-bold">내 프로필</div>
          <Separator className="my-20" />
          <div>
            <Image width={100} height={100} src={userProfileImg} alt="" />
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-20 flex flex-col gap-32">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="body2-bold">닉네임</FormLabel>
                    <FormControl>
                      <Input placeholder="변경하실 닉네임을 입력하세요." defaultValue={userName} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="account"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="body2-bold">닉네임</FormLabel>
                    <FormControl>
                      <Input className="bg-grayscale-50" defaultValue={userEmail} disabled {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-16 flex justify-end">
                <Button className="px-16 py-8 body3-bold" variant="primary" size="md" type="submit">
                  변경하기
                  <ArrowRightIcon className="w-20" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Lectures;
