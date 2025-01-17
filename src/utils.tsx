import { FourCircles, circle, fourCircles } from './schema';
import { Tree } from '@fluid-experimental/tree2';
import { Guid } from 'guid-typescript';


export const trimTree = (fc: FourCircles) => {
    if (testForEmpty(fc)) {
        const parent = Tree.parent(fc);
        if (Tree.is(parent, fourCircles)) {
            const key = Tree.key(fc) as keyof typeof parent;
            if (key != 'level') parent[key] = undefined;
            trimTree(parent);
        }
    }
};

export const createFourCircles = (level: number) => {
    return fourCircles.create({
        circle1: circle.create({ id: Guid.create().toString(), color: getRandomColor() }),
        circle2: circle.create({ id: Guid.create().toString(), color: getRandomColor() }),
        circle3: circle.create({ id: Guid.create().toString(), color: getRandomColor() }),
        circle4: circle.create({ id: Guid.create().toString(), color: getRandomColor() }),
        level: level,
    });
};

export const againAgain = (fc: FourCircles) => {
    if (testForEmpty(fc)) {
        fc.circle1 = circle.create({id: Guid.create().toString(), color: getRandomColor() });
        fc.circle2 = circle.create({id: Guid.create().toString(), color: getRandomColor() });
        fc.circle3 = circle.create({id: Guid.create().toString(), color: getRandomColor() });
        fc.circle4 = circle.create({id: Guid.create().toString(), color: getRandomColor() });
    }
};

export const testForEmpty = (fc: FourCircles) => {
    if (fc.circle1 == undefined &&
        fc.circle2 == undefined &&
        fc.circle3 == undefined &&
        fc.circle4 == undefined)
        return true;
    return false;
};
export const circleSizeMap = new Map<number, string>([
    [1, 'w-64 h-64'],
    [2, 'w-32 h-32'],
    [3, 'w-16 h-16'],
    [4, 'w-8 h-8'],
    [5, 'w-4 h-4'],
    [6, 'w-2 h-2'],
]);

export const getRandomColor = (): string => {
    const color = colorMap.get(getRandomInt(5));
    if (typeof color === 'string') {
        return color;
    } else {
        return 'Black';
    }
};
const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
};
export const colorMap = new Map<number, string>([
    [0, 'Red'],
    [1, 'Green'],
    [2, 'Blue'],
    [3, 'Orange'],
    [4, 'Purple'],
]);
