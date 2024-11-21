import { Header } from '~widgets/header';
import { Footer } from '~widgets/footer';
import { Button } from '~shared/ui/button';

export function HomePage() {
  const buttonIcons: Array<string> = ['facebook', 'reddit', 'twitter', 'discord'];

  const socialHandler = (socialName: string): void => {
    console.log(socialName);
  };

  return (
    <>
      <Header />
      <main className="wide relative h-max ">
        <h1 className="text-xxl max-w-[35rem] pt-32 mb-8 leading-[3.5rem]">
          Hello I’am <br />
          <span className="font-extrabold">Sattor Toshmamadov. Frontend </span>
          <span className="outline-text">Developer</span> Based In <span className="font-extrabold">Moscow.</span>
        </h1>

        <p className="max-w-[35rem] text-zinc-500 leading-6 tracking-wide mb-[5.4rem]">
          I'm Sattor Toshmamadov Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to specimen book.
        </p>

        <div className="flex gap-8">
          {buttonIcons.map((icon) => (
            <Button
              key={icon}
              className="bg-white text-black fill-black hover:bg-black active:bg-black active:scale-90"
              size="medium"
              logo={{ name: icon }}
              isHideLabel
              svgClasses="group-hover:[&>path]:fill-white group-active:[&>path]:fill-white [&>path]:fill-black"
              onClick={() => socialHandler(icon)}
            />
          ))}
        </div>

        <img
          className="absolute right-[2rem] top-0 select-none z-[-1]"
          src="/assets/images/working_man.png"
          alt="Working Man"
          width="889"
          height="596"
        />
      </main>
      <Footer />
    </>
  );
}
