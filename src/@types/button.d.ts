/**
 * @name MergeComponentProps
 * @description ChakraUI 타입과 커스텀 Props 타입을 병합합니다.
 */
// type MergeComponentProps<
//   T extends React.ElementType,
//   P extends object = { object },
// > = Omit<React.ComponentPropsWithRef<T>, keyof P> & P;

type MergeComponentProps<
  T extends interface,
  P extends object = { object },
> = Omit<T, keyof P> & P;

// color scale
type colorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

// Button
type ButtonVariant =
  | 'primary-filled'
  | 'primary-outlined'
  | 'secondary-filled'
  | 'red-outlined'
  | 'purple-filled'
  | 'lecture-category';
type ButtonSize = 'sm' | 'md' | 'lg' | 'category';
