import { test, expect } from 'vitest';
import { quizcounter } from '../classQuiz';

test('주어진 퀴즈의 정답을 카운트하는 Class 테스트', () => {
  expect(quizcounter.getScore).toBe(1);
});
