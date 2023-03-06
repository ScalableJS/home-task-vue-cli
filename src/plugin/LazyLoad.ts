import { App, Plugin } from 'vue';

export const lazyLoad: Plugin = {
  install(app: App) {
    app.directive('lazyload', {
      beforeMount: (el: HTMLElement) => {
        function loadImage() {
          const imageElement: HTMLImageElement = Array.from(el.children).find(
            (el) => el.nodeName === 'IMG'
          ) as HTMLImageElement;

          if (imageElement) {
            imageElement.addEventListener('load', () => {
              setTimeout(() => el.classList.add('loaded'), 100);
            });
            imageElement.addEventListener('error', () => console.log('error'));
            imageElement.src = imageElement.dataset.url as string;
          } else {
            console.error('can not find img');
          }
        }

        function createObserver() {
          const observer = new IntersectionObserver(
            (
              entries: IntersectionObserverEntry[],
              observer: IntersectionObserver
            ): void => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                  return;
                }
                loadImage();
                observer.unobserve(el);
              });
            },
            {
              root: null,
              threshold: 0,
            }
          );

          observer.observe(el); // target element to watch
        }

        if (!window['IntersectionObserver']) {
          loadImage();
        } else {
          createObserver();
        }
      },
    });
  },
};
