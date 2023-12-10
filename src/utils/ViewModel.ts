import { useEffect, useState } from 'react';

export interface ViewModel<Props> {
  props?: Props;

  setProps(props: Props): void;
  postSetProps?(updatedProps: Partial<Props>): void;
}

export abstract class BaseViewModel<Props extends object = Record<string, never>>
  implements ViewModel<Props>
{
  props!: Props;
  postSetProps?(updatedProps: Partial<Props>): void;

  /** Make sure to call makeSimpleAutoObservable */
  constructor(...props: Props extends Record<string, never> ? [] : [props: Props]) {
    this.setProps((props[0] as Props) ?? {});
  }

  // assert that this.props will be set
  setProps(props: Props) {
    const updatedProps: Partial<Props> = {};

    if (!this.props) {
      this.props = props;
      Object.assign(updatedProps, props);
    } else {
      // assign props for those that changed
      for (const key in props) {
        if (props[key] !== this.props[key]) {
          this.props[key] = props[key];
          updatedProps[key] = props[key];
        }
      }
    }

    this.postSetProps?.(updatedProps);
  }
}

export function useViewModel<TProps>(
  vmFactory: (props: TProps) => ViewModel<TProps>,
  props: TProps,
) {
  const [vm] = useState(() => vmFactory(props));

  useEffect(() => {
    vm.setProps(props);
  }, [props, vm]);

  return vm;
}

export function useViewModelConstructor<R extends ViewModel<Record<string, never>>>(
  vmConstructor: new (props: Record<string, never>) => R,
): R;
export function useViewModelConstructor<TProps, R extends ViewModel<TProps>>(
  vmConstructor: new (props: TProps) => R,
  props: TProps,
): R;
export function useViewModelConstructor<
  TProps,
  R extends ViewModel<TProps | Record<string, never>>,
>(vmConstructor: new (props: TProps) => R, props?: TProps): R {
  const [vm] = useState(() => {
    if (props) {
      return new vmConstructor(props);
    }
    return new vmConstructor({} as TProps);
  });

  useEffect(() => {
    if (props) {
      vm.setProps(props);
    }
  }, [props, vm]);

  return vm;
}

// Example usage:

// export class ExampleViewModel extends BaseViewModel<{ someProp: string }> {
//   constructor(props: { someProp: string }) {
//     super(props);
//   }
// }

// export interface ExampleComponentProps {
//   someProp: string;
// }

// export const ExampleComponent = observer((props: ExampleComponentProps): JSX.Element => {
//   const vm = useViewModelConstructor(ExampleViewModel, props);

//   return (
//     <div>
//       <div>ExampleComponent</div>
//     </div>
//   );
// });
