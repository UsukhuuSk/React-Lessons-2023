import { cutTextToLength } from "../index";
import { slugify } from "../index";
import { composeArticleSlug } from "../index";
import { extractArticleIdFromSlug } from "../index";

const str = "The quick brown fox jumps over the lazy dog.";
const str2 = "HELLO# HOW% ARE YOU?!@!#";
const str3 = "TEST";
const str4 = 123;
const str5 = "hELLo What is this?123";
const str6 = 12334878098098;
const str7 = "hi-how-are-ya";
describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});

describe("slugify", () => {
  it("shouldnt change the space to (-)", () => {
    console.log(slugify(str2));
    expect(slugify(str2)).toBe("hello-how-are-you");
  });
  it("should change the space to (-)", () => {
    expect(slugify(str5)).toBe("hello-what-is-this123");
  });
});

describe("composeArticleSlug", () => {
  it("should cut text to length", () => {
    expect(composeArticleSlug(str4, str3)).toBe("test-123");
  });
  it("should", () => {
    expect(composeArticleSlug(str6, str)).toBe(
      "the-quick-brown-fox-jumps-over-the-lazy-dog-12334878098098"
    );
  });
});

describe("extractArticleIdFromSlug", () => {
  it("should do something", () => {
    expect(extractArticleIdFromSlug(str7)).toBe("ya ");
  });
});
