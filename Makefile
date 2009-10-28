CPP=cpp
EX=ex
EXEC=mwturbo.user.js
SRCS=mwturbo.main.js
DEPEND=makedepend
DEPENDOPTS=-o.js

all: $(EXEC)

%.user.js: %.main.js
	$(CPP) -C -o $@ $<
	$(EX) -c ':g/^#/d' -c ':wq' $@
	sed -i '/^$$/d' $@
	unexpand --first-only -t 1 $@ > $@.temp
	mv -f $@.temp $@

clean:
	rm -f $(EXEC) Makefile.bak

deps: $(SRCS)
	$(DEPEND) $(DEPENDOPTS) $(SRCS)
