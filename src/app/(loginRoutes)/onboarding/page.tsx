'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import authApi from 'apis/auth';
import Logo from 'assets/icons/logo-text-black.svg';
import Symbol from 'assets/icons/symbol.svg';
import { LoginCarousel } from 'components/Carousel';
import { Button } from 'components/ui/button';
import { CheckboxButton } from 'components/ui/checkbox-button';
import { Form, FormControl, FormField, FormItem, FormMessage } from 'components/ui/form';
import { USER_INFO } from 'constants/account';
import { CategoryData } from 'constants/category';
import { ROUTES } from 'constants/routes';
import { getLocalStorage, setLocalStorage } from 'hooks/storage';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

const page = () => {
  const router = useRouter();
  const userInfo = getLocalStorage(USER_INFO);

  const category = CategoryData.filter((v) => {
    return v.main !== '전체강의';
  });

  const FormSchema = z.object({
    interests: z
      .array(z.string())
      .min(1, { message: '최소 한개 이상 선택해주세요 :)' })
      .max(2, { message: '최대 두개 이하로 선택해주세요 :)' }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      interests: [],
    },
  });

  const { mutate } = useMutation(authApi.postInterests, {
    onSuccess: () => {
      router.push(ROUTES.HOME);
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    mutate(
      {
        interests: data.interests,
      },
      {
        onSuccess: () => {
          setLocalStorage(
            USER_INFO,
            JSON.stringify({ ...JSON.parse(userInfo ?? ''), interests: data.interests.join(',') })
          );
          router.push(ROUTES.HOME);
        },
      }
    );
  }

  return (
    <div className="flex">
      <div
        className="flex h-screen w-4/6 items-center justify-center"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL}/login.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <LoginCarousel />
      </div>
      <div className="flex h-screen w-2/6 min-w-[520px] justify-center rounded-[4px] bg-white">
        <div className="flex flex-col items-start justify-start px-[100px] pt-[26px]">
          <Link href="/">
            <div className="flex gap-[6px]">
              <Symbol />
              <Logo />
            </div>
          </Link>
          <div className="flex pt-[116px] text-blue-400 en-H2-semibold">Onboarding</div>
          <div className="pt-16 H4-semibold">
            <span className="text-blue-400">클래스코프</span>에 오신 것을 환영해요!
            <div>
              <span className="text-blue-400">관심 분야</span>가 어떻게 되시나요?
            </div>
          </div>
          <div className="pt-16 text-grayscale-300 body3-semibold">2가지 이내로 선택해주세요 :)</div>
          <div className="flex flex-wrap gap-16 pt-[64px]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="interests"
                  render={() => (
                    <FormItem className="inline-flex flex-wrap gap-8">
                      {category.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="interests"
                          render={({ field }) => {
                            return (
                              <FormItem key={item.id}>
                                <FormControl>
                                  <CheckboxButton
                                    checked={field.value?.includes(item.main)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item.main])
                                        : field.onChange(field.value.filter((value) => value !== item.main));
                                    }}
                                  >
                                    {item.sideBarIcon}
                                    {item.main}
                                  </CheckboxButton>
                                </FormControl>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-[60px]">
                  <Button type="submit" size="md" variant="primary">
                    다음으로
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
