export const SeatTypeColor = (status: number): string => {
  switch (status) {
    case 0:
      return '#F2C94C'; // 사용 가능
    case 1:
      return '#7CAFC2'; // 사용 중
    case 2:
      return '#6B8E4E'; // 예약 완료
    default:
      return '#CCCCCC'; // 예외 처리용 색상
  }
};
