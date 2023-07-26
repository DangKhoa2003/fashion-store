import { Heading } from '@/components/ui/heading';
import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

const OurStrength = () => {
      return (
            <section className="mt-10 w-[94vw] mx-auto">
                  <Heading title="Our Strength" />

                  <div className="my-12">
                        <Separator />
                        <Accordion type="single" collapsible>
                              <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                          <h2 className="uppercase font-semibold w-[20%] group-hover:underline">
                                                a quality assessment now goes
                                                beyond the garment
                                          </h2>
                                          <h2 className="capitalize font-bold text-9xl no-underline mb-4">
                                                quality
                                          </h2>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                          Yes. It adheres to the WAI-ARIA design
                                          pattern.
                                    </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                          <h2 className="uppercase font-semibold w-[20%] group-hover:underline">
                                                a look defined by the fashion industry
                                          </h2>
                                          <h2 className="capitalize font-bold text-9xl no-underline mb-4">
                                                uniqueness
                                          </h2>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                          Yes. It adheres to the WAI-ARIA design
                                          pattern.
                                    </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="item-3">
                                    <AccordionTrigger>
                                          <h2 className="uppercase font-semibold w-[20%] group-hover:underline">
                                                display all your fashion goods along with
                                          </h2>
                                          <h2 className="capitalize font-bold text-9xl no-underline mb-4">
                                                presence
                                          </h2>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                          Yes. It adheres to the WAI-ARIA design
                                          pattern.
                                    </AccordionContent>
                                    <AccordionContent>
                                          Yes. It adheres to the WAI-ARIA design
                                          pattern.
                                    </AccordionContent>
                              </AccordionItem>
                        </Accordion>
                  </div>
            </section>
      );
};

export default OurStrength;
