// 定义正二十面体的边长
const edgeLength: number = NaN; // 示例边长
// 计算体积
export const volume = (5 / 12) * (3 + Math.sqrt(5)) * Math.pow(edgeLength, 3);
// 计算表面积
export const surfaceArea = 5 * Math.sqrt(3) * Math.pow(edgeLength, 2);
