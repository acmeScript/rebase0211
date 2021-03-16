import React from 'react';
import { AreaContext } from './routes-areaProvider-context';

const { useContext } = React;

type RenderCallback = (components: React.ReactElement[]) => React.ReactNode;

interface Props {
    name: string;
    children?: React.ReactNode | RenderCallback;
}

const EMPTY_ARRAY = [] as React.ReactElement[];

export const RenderArea: React.FunctionComponent<Props> = ({
    name: areaId,
    children,
}) => {
    const context = useContext<typeof AreaContext>(AreaContext);
    const components = context.getComponents(areaId);
    return typeof children === 'function'
        ? (children as RenderCallback)(components || EMPTY_ARRAY)
        : components;
};