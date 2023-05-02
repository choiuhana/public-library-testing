//navigator
export const NAVIGATOR_TAB_BOTTOM = "NavigatorTabBottom";

export const NAVIGATOR_STACK = "NavigatorStack";

//Screen
export const SCREEN_MAIN = "ScreenMain";
export const SCREEN_LOGIN = "ScreenLogin";
export const SCREEN_SLIDER = "ScreenSlider";

export type Params = {
    [NAVIGATOR_STACK]: {
        [SCREEN_LOGIN]: undefined;

        [NAVIGATOR_TAB_BOTTOM]: undefined; // || {id: number }
        [SCREEN_SLIDER]: undefined;
    };
    [NAVIGATOR_TAB_BOTTOM]: {
        [SCREEN_MAIN]: undefined; // || {id: number }

        [SCREEN_SLIDER]: undefined;
    };
};
