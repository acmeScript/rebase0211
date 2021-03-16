import React from 'react';
import { AreaContext } from './routes-areaProvider-context';

const { useEffect, useContext, useRef } = React;

let orderNumber = 0;

interface ComponentData {
    value: React.ReactNode;
    orderNumber: number | null;
}

export function useRender(areaId: string, children: React.ReactNode) {
    const { addComponent, removeComponent, updateComponent } = useContext(
        AreaContext,
    );
    const ref = useRef<ComponentData>({ value: children, orderNumber: null });

    if (ref.current.orderNumber == null) {
        ref.current.orderNumber = orderNumber;
    }
    orderNumber += 1;

    useEffect(() => {
        addComponent(areaId, ref.current);
        return () => {
            removeComponent(areaId, ref.current);
        };
    }, [ref.current, addComponent, removeComponent]);

    useEffect(() => {
        ref.current.value = children;
        updateComponent(areaId, ref.current);
    }, [children]);
}

export const Content: React.FunctionComponent<{ name: string }> = ({
    name: areaId,
    children,
}) => {
    useRender(areaId, children);
    return null;
};