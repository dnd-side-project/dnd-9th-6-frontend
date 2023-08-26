import { Box, Text, UseRadioProps, useRadio } from '@chakra-ui/react';
import { colors } from 'styles/theme/foundations/colors';
import { typo } from 'styles/theme/foundations/typo';

interface RadioCardProps extends UseRadioProps {
  children: React.ReactNode;
}

function Radio(props: RadioCardProps) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          height: '34px',
          padding: '8px 16px',
          borderWidth: '1px',
          borderRadius: '2px',
          backgroundColor: 'white',
        }}
        _checked={{
          color: colors.primary['classcope-blue-5'],
          borderWidth: '1px',
          borderColor: colors.primary['classcope-blue-5'],
        }}
      >
        <Text
          style={{
            ...typo.body3.medium,
          }}
        >
          {props.children}
        </Text>
      </Box>
    </Box>
  );
}

export default Radio;
