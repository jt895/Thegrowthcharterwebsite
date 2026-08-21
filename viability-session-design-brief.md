# The Viability Session
## Standalone Section Design Brief for the Site Build

---

## 1. Purpose and strategic role

The Viability Session is the strongest conversion asset on the Growth Program page and it's currently formatted as fine print. This section fixes that.

Its job in the messaging hierarchy: it is certainty sold in miniature. The whole brand promise (evidence before spend, honest answers, no dependency) demonstrated in a single $450, fully credited transaction. For the founder carrying doubt, it converts "should I commit thousands to this?" into "should I spend $450 to find out?", which is a decision they can make today without anyone's permission.

The section must do three things:

1. Reduce the perceived risk of engaging to near zero
2. Prove the honesty claim ("if the answer is no, we'll say so") in the structure of the offer itself
3. Give the pricing table a resolution, so the page ends the pricing conversation with relief rather than hesitation

---

## 2. Placement

**Primary: Growth Program page, immediately after the Ways to Engage pricing table, before "What changes".**

Rationale: the pricing table raises the exact question this section answers ("is this worth it for my business?"). Sequence matters. Prices create the tension, the Viability Session resolves it. Do not place it above pricing, where it has no tension to resolve, and do not leave it inside the table as a footnote, which is where it is now.

**Secondary (optional, later): condensed one-line version above the closing CTA on the homepage.** Something like: "Every engagement starts with a $450 Viability Session, credited in full. Certainty before commitment." Ship the primary section first and measure before adding this.

---

## 3. Copy

**Eyebrow:** The Viability Session

**Headline (recommended):**
# Know it's worth it before you commit.

**Alternates for testing:**
- Before you spend anything, find out if it will pay.
- The first question isn't which package. It's whether this pays for itself.

**Price treatment (display element, not body text):**
$450. Credited in full.

**Body:**
Every engagement starts with a Viability Session. Two and a half hours with your numbers, your market and your goals, answering one question honestly: will the Growth Program pay for itself in your business?

If the answer is yes, the $450 comes off your program. If the answer is no, we'll tell you straight, and you'll still walk away knowing more about your business than you did.

Either way, you get certainty. That's the point.

**Three-step strip (supporting element):**
- 01 Book the session
- 02 We test the fit against your actual numbers
- 03 You get an honest verdict. Yes, and it's credited in full. No, and we say so.

**CTA:** Book your Viability Session

**Microcopy under CTA:** $450 ex GST. Credited in full against any Growth Program engagement.

**Copy notes:**
- Duration confirmed: 2.5 hours. "Two and a half hours" in the body does real work: it makes $450 feel like senior time honestly priced, not a sales call with a fee attached.
- Do not soften "we'll tell you straight." The honesty is the product.
- The CTA changes from the generic "Book your free 20 minute call" to "Book your Viability Session." This section sells a specific next step with a specific price. Mixing it with the free call weakens both. The free call remains the page's closing CTA for people not yet ready to spend $450.

---

## 4. Layout and visual treatment

Design system reference: dark theme, near-black ground, cool silver-grey and teal-to-emerald green from the logo, Instrument Serif for display, Inter for body.

**Structure: a contained card, not a full-bleed band.**

The pricing table above it and the sections below run edge to edge in the page rhythm. This section breaks that rhythm deliberately: a single centred card, max-width around 880px, generous internal padding (64px desktop, 32px mobile), sitting on the near-black ground with clear space above and below (120px+). The containment signals "this is one thing, look at it."

**The card is the only element on the page that uses the teal-to-emerald gradient as a border.**

A 1px to 2px gradient border on the card (subtle, not neon), with the interior a slightly lifted near-black (for example, 4 to 6 percent lighter than the page ground). Reserve this treatment for this card alone. If the gradient border appears elsewhere on the page, it stops meaning anything.

**Internal hierarchy, top to bottom:**

1. Eyebrow: Inter, small caps or letterspaced uppercase, silver-grey, small
2. Headline: Instrument Serif, large (clamp roughly 32px to 48px)
3. Price treatment: the hero element. "$450" in Instrument Serif at display scale (roughly 64px to 88px), with "Credited in full." set beside or beneath it in Inter. This is the number people screenshot. Let it breathe.
4. Body copy: Inter, comfortable measure (65ch max), silver-grey at high readability contrast
5. Three-step strip: horizontal on desktop, numbered, thin rules or generous gaps between steps. Stacks vertically on mobile.
6. CTA button: the standard site primary button style. One button. No secondary CTA inside the card.
7. Microcopy: Inter, small, muted

**What to avoid:**
- No icons for the three steps. Numbers and type only. Icons cheapen it.
- No badge, starburst or "special offer" energy. This is a confident, senior offer. The restraint is the persuasion.
- No animation beyond whatever subtle scroll-reveal the rest of the page already uses. If the page has none, this section doesn't introduce it.

---

## 5. Responsive behaviour

- Desktop (1024px+): card centred, three-step strip horizontal, price treatment can sit beside the headline block in a two-column arrangement if it helps balance, otherwise stacked
- Tablet (640px to 1023px): single column inside the card, price treatment below headline, steps horizontal if they fit at readable size, otherwise stacked
- Mobile (below 640px): everything stacks. Price stays large (do not shrink it below roughly 48px). Card padding drops to 24px to 32px. Steps stack with the numbers left-aligned.
- The card border and lifted ground carry to all sizes. On mobile the card can go near full-bleed with 16px page gutters.

---

## 6. Accessibility and quality

- Contrast: body text on the lifted near-black must hit WCAG AA (4.5:1). Check the silver-grey value against the interior ground, not the page ground.
- The gradient border is decorative. No information may live only in the gradient.
- The CTA is a real link or button element with a descriptive accessible name ("Book your Viability Session"), not a styled div.
- Heading order: the section headline should sit correctly in the page's heading hierarchy (h2, given the page h1 is the hero).
- The price is text, not an image. It should be selectable, findable and readable by screen readers as "$450, credited in full."

---

## 7. Build notes

Consistent with the existing stack: vanilla HTML/CSS/JS, deployed via GitHub and Netlify.

Suggested DOM shape:

```
<section class="viability" id="viability-session">
  <div class="viability__card">
    <p class="viability__eyebrow">The Viability Session</p>
    <h2 class="viability__headline">Know it's worth it before you commit.</h2>
    <p class="viability__price">$450. <span>Credited in full.</span></p>
    <div class="viability__body"> ... </div>
    <ol class="viability__steps"> ... three li items ... </ol>
    <a class="btn btn--primary" href="[booking link]">Book your Viability Session</a>
    <p class="viability__fineprint">$450 ex GST. Credited in full against any Growth Program engagement.</p>
  </div>
</section>
```

- Gradient border technique: either `border: 2px solid transparent` with a `background: linear-gradient(interior), linear-gradient(teal, emerald)` double-background and `background-origin/clip: border-box`, or a pseudo-element behind the card. Either is fine in vanilla CSS.
- Give the section an `id` so the pricing table's Viability Session mention (which should shrink to one line pointing here) can anchor-link to it.
- No booking system exists yet, so at launch the CTA links to the contact form with the enquiry type pre-selected as "Viability Session" (add it as an option if the form doesn't have one), and payment is handled by invoice after the session is scheduled. This works and shouldn't delay shipping the section.
- Phase two, when ready: a lightweight paid booking flow (Calendly or Cal.com with Stripe attached) with a distinct booking type labelled "Viability Session ($450, 2.5 hours)". Paying at booking meaningfully lifts show-up rates and makes the commitment clear at the point of decision. Until then, count Viability Session form submissions as the conversion event.

---

## 8. What changes elsewhere on the page

1. The current fine-print line under the pricing table ("Every engagement starts with a $450 Viability Session, credited in full") reduces to a short pointer: "Every engagement starts with the Viability Session. See how it works below." linked to the anchor. No duplicated selling copy.
2. The closing "Is this you?" section keeps the free 20-minute call as its CTA. Two rungs on the ladder: free call for the unsure, Viability Session for the nearly ready. Don't collapse them.

---

## 9. Success measures

- Clicks on "Book your Viability Session" as a distinct event from free-call clicks
- Viability Session bookings per month (the real number)
- Scroll depth past the pricing table, before and after the section ships, as a rough read on whether pricing is still where people bail

If Netlify analytics or whatever measurement is on the site can't separate the two CTAs, fix that before shipping, or the section's effect will be invisible.
