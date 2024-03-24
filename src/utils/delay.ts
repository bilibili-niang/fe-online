import {customRef} from 'vue';

function delay<T>(data: T, time: number = 100): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), time)
    })
}

export default delay


/**

 自定义防抖函数
 @param value
 @param duration
 @returns {*}

 */

export function debounceRef(value: any, duration: number) {
    let timer: any;
    return customRef((track, trigger) => {
            return {
                get() {
                    track();
                },
                set(val: any) {
                    clearTimeout(timer);
                    timer = setTimeout(() => {
                        trigger();
                        value = val;
                    }, duration);
                }
            };
        }
    );
}