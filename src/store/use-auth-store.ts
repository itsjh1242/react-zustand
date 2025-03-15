import { User } from "@/schema/user";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

/**
 * @description `useUserStore`는 유저 정보를 관리하는 Zustand 스토어
 * - `user`: 상태: 현재 로그인한 유저 정보
 * - `setUser`: 유저 정보를 업데이트하는 액션 함수
 * - `persist` 미들웨어 사용: 로컬스토리지에 `auth-storage` 키로 저장
 * - `createJSONStorage`: JSON 형태로 변환하여 저장 및 복원
 *
 * @module useUserStore
 */
export const useUserStore = create<AuthStore>()(
  persist(
    (set) => ({
      /**
       * 현재 로그인한 유저 정보
       * @type {User | null}
       */
      user: null,

      /**
       * 유저 정보를 업데이트하는 액션 함수
       * @function
       * @param {User | null} user - 업데이트할 유저 정보
       */
      setUser: (user: User | null) => set({ user }),
    }),
    {
      /**
       * @property {string} name - 로컬스토리지에 저장될 키 이름
       */
      name: "auth-storage",

      /**
       * @property {Storage} storage - localStorage를 활용한 JSON 스토리지 설정
       * @description Zustand의 `createJSONStorage`를 사용하여 데이터를 JSON 형태로 저장
       */
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
