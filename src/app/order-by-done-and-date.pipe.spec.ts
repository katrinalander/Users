import { OrderByDoneAndDatePipe } from './order-by-done-and-date.pipe';

describe('OrderByDoneAndDatePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByDoneAndDatePipe();
    expect(pipe).toBeTruthy();
  });
});
