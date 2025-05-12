export const getPlaceStatus = (placeName: string): number => {
  if (placeName === '슈니나래') {
    return 1;
  }
  if (placeName === '슈니마루') {
    return 2;
  }
  if (placeName === '멀티플렉스') {
    return 1;
  }
  return 0;
};

export const getPlaceColor = (status: number): string => {
  switch (status) {
    case 1:
      return '#6B8E4E'; // 초록
    case 2:
      return '#C86462'; // 빨강
    default:
      return '#999999'; // 회색
  }
};
