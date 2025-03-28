import type { Router } from 'vue-router';

export * from './dark';

let $router: Router;
export const useRouter$ = () => $router;
export const setupRouter$ = (router: Router) => ($router = router);
