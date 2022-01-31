import { memo } from 'react'
import styled from 'styled-components'

export type FlexProps = {
  flex?: string
  flexGrow?: string | number
  alignText?: 'center' | 'right' | 'left'
  direction?: string
  flexShrink?: string | number
  flexBasis?: string
  flexWrap?: string
  justify?: string
  align?: string
  alignSelf?: string
  margin?: string
  padding?: string
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
  minWidth?: string
  minHeight?: string
  gap?: string
  css?: string
};

export const Flex = memo(styled.div<FlexProps>`
  display: flex;
  position: relative;
  flex-direction: ${({ direction }: Partial<FlexProps>) => direction || 'row'};
  flex: ${({ flex }: Partial<FlexProps>) => (flex !== undefined ? flex : '0')};
  flex-grow: ${({ flexGrow }: Partial<FlexProps>) => (flexGrow !== undefined ? flexGrow : '0')};
  flex-shrink: ${({ flexShrink }: Partial<FlexProps>) => (flexShrink !== undefined ? flexShrink : '0')};
  flex-basis: ${({ flexBasis }: Partial<FlexProps>) => flexBasis || 'auto'};
  flex-wrap: ${({ flexWrap }: Partial<FlexProps>) => flexWrap || 'nowrap'};
  gap: ${({ gap }: Partial<FlexProps>) => (gap !== undefined ? gap : '0')};
  text-align: ${({ alignText }: Partial<FlexProps>) => alignText || 'left'};
  justify-content: ${({ justify }: Partial<FlexProps>) => justify || 'flex-start'};
  align-items: ${({ align }: Partial<FlexProps>) => align || 'flex-start'};
  align-self: ${({ alignSelf }: Partial<FlexProps>) => alignSelf || 'center'};
  margin: ${({ margin }: Partial<FlexProps>) => margin || '0'};
  padding: ${({ padding }: Partial<FlexProps>) => padding || '0'};
  width: ${({ width }: Partial<FlexProps>) => width || 'auto'};
  height: ${({ height }: Partial<FlexProps>) => height || 'auto'};
  max-width: ${({ maxWidth }: Partial<FlexProps>) => maxWidth || 'auto'};
  max-height: ${({ maxHeight }: Partial<FlexProps>) => maxHeight || 'auto'};
  min-width: ${({ minWidth }: Partial<FlexProps>) => minWidth || 'auto'};
  min-height: ${({ minHeight }: Partial<FlexProps>) => minHeight || 'auto'};
`)

// default flex centralized, 100% width and height
export const FlexWrapper = memo(styled(Flex).attrs((props: Partial<FlexProps>) => (
  {
    width: props.width || '100%',
    height: props.height || '100%',
    justify: props.justify || 'center',
    align: props.align || 'center',
  }
))``)

export const FlexTight = memo(styled(Flex).attrs({
  size: 'unset',
  width: 'initial',
})``)