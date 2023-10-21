'use client';

import type { Meta, StoryObj } from '@storybook/react';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

import { toast } from 'utils/useToast';
import { Toaster } from './toaster';

import { Input } from './input';
import { Button } from './button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form';

const meta = {
  title: 'Classcope/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Form는 사용자의 입력을 검증하고 제출할 수 있는 컴포넌트입니다.',
    docs: {
      description: {
        component: 'react-hook-form과 zod 라이브러리를 사용합니다.',
      },
    },
  },
  decorators: [
    Story => (
      <div className="p-12">
        <Story />
        <Toaster />
      </div>
    ),
  ],
} satisfies Meta<typeof Form>;

export default meta;

export const WithInputForm: StoryObj<typeof Form> = {
  parameters: {
    docs: {
      description: {
        story: 'Input과 함께 사용된 Form입니다.',
      },
    },
  },
  render: args => {
    const FormSchema = z.object({
      username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
      }),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className="mt-2 p-4 w-[340px] rounded-md bg-slate-950">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }

    return (
      <Form {...form} {...args}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-2/3"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};

export const WithSelectForm: StoryObj<typeof Form> = {
  parameters: {
    docs: {
      description: {
        story: 'Select와 함께 사용된 Form입니다.',
      },
    },
  },
  render: args => {
    const FormSchema = z.object({
      email: z
        .string({
          required_error: 'Please select an email to display.',
        })
        .email(),
    });
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className="mt-2 p-4 w-[340px] rounded-md bg-slate-950">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }

    return (
      <Form {...form} {...args}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-2/3"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your
                  <Link href="/examples/forms">email settings</Link>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};
