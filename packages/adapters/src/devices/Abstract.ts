import { BaseInput, SupportEvent } from '@any-touch/types';
// 适配器的抽象类
export default abstract class {
    abstract load(event: SupportEvent): BaseInput|void
}; 