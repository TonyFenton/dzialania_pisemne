<?php

/* base.html.twig */
class __TwigTemplate_258dba21eda1d375b59e418e058a0ee5fa68d27d82eae1ee83e8513557e45db4 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'description' => array($this, 'block_description'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_f9458e7b4124e79c79369cd410e3b7c537fc66eff3697ae62094014449301016 = $this->env->getExtension("native_profiler");
        $__internal_f9458e7b4124e79c79369cd410e3b7c537fc66eff3697ae62094014449301016->enter($__internal_f9458e7b4124e79c79369cd410e3b7c537fc66eff3697ae62094014449301016_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\" />
\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
        <title>";
        // line 7
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
\t\t<meta name=\"description\" content=\"";
        // line 8
        $this->displayBlock('description', $context, $blocks);
        echo "\" />
\t\t
        ";
        // line 10
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 18
        echo "\t\t
        <link rel=\"icon\" type=\"image/x-icon\" href=\"";
        // line 19
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("img/logo.png"), "html", null, true);
        echo "\" />
\t\t
\t\t<!-- Begin Cookie Consent plugin by Silktide - http://silktide.com/cookieconsent -->
\t\t\t<script type=\"text/javascript\">
\t\t\t\twindow.cookieconsent_options = {\"message\":\"Strona korzysta z plików cookies w celu realizacji usług i zgodnie z Polityką Plików Cookies.\",\"dismiss\":\"Rozumiem\",\"learnMore\":\"Dowiedz się więcej\",\"link\":null,\"theme\":\"dark-floating\"};
\t\t\t</script>

\t\t\t<script type=\"text/javascript\" src=\"//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.10/cookieconsent.min.js\"></script>
\t\t<!-- End Cookie Consent plugin -->

    </head>
    <body>
        ";
        // line 31
        $this->displayBlock('body', $context, $blocks);
        // line 32
        echo "        ";
        $this->displayBlock('javascripts', $context, $blocks);
        // line 36
        echo "    </body>
</html>";
        
        $__internal_f9458e7b4124e79c79369cd410e3b7c537fc66eff3697ae62094014449301016->leave($__internal_f9458e7b4124e79c79369cd410e3b7c537fc66eff3697ae62094014449301016_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_4dd0e66ab6db3a470c506157a2bacd2f8b0365f48134f52b069939c925cc532c = $this->env->getExtension("native_profiler");
        $__internal_4dd0e66ab6db3a470c506157a2bacd2f8b0365f48134f52b069939c925cc532c->enter($__internal_4dd0e66ab6db3a470c506157a2bacd2f8b0365f48134f52b069939c925cc532c_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        
        $__internal_4dd0e66ab6db3a470c506157a2bacd2f8b0365f48134f52b069939c925cc532c->leave($__internal_4dd0e66ab6db3a470c506157a2bacd2f8b0365f48134f52b069939c925cc532c_prof);

    }

    // line 8
    public function block_description($context, array $blocks = array())
    {
        $__internal_bf2d1c73f3a789208a68d5bced58c8c346e2b4df291a8d85a5a7fc85ede38a09 = $this->env->getExtension("native_profiler");
        $__internal_bf2d1c73f3a789208a68d5bced58c8c346e2b4df291a8d85a5a7fc85ede38a09->enter($__internal_bf2d1c73f3a789208a68d5bced58c8c346e2b4df291a8d85a5a7fc85ede38a09_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "description"));

        
        $__internal_bf2d1c73f3a789208a68d5bced58c8c346e2b4df291a8d85a5a7fc85ede38a09->leave($__internal_bf2d1c73f3a789208a68d5bced58c8c346e2b4df291a8d85a5a7fc85ede38a09_prof);

    }

    // line 10
    public function block_stylesheets($context, array $blocks = array())
    {
        $__internal_ade284bc7526ebe00e5dfc92383586a59b63679e61f09edde0a58f0f463cba0f = $this->env->getExtension("native_profiler");
        $__internal_ade284bc7526ebe00e5dfc92383586a59b63679e61f09edde0a58f0f463cba0f->enter($__internal_ade284bc7526ebe00e5dfc92383586a59b63679e61f09edde0a58f0f463cba0f_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 11
        echo "\t\t\t<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">
\t\t\t<!--[if lt IE 9]>
\t\t\t\t<script src=\"https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js\"></script>
\t\t\t\t<script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script>
\t\t\t<![endif]-->
\t\t\t<link href=\"";
        // line 16
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("css/style.css"), "html", null, true);
        echo "\" rel=\"stylesheet\" />
\t\t";
        
        $__internal_ade284bc7526ebe00e5dfc92383586a59b63679e61f09edde0a58f0f463cba0f->leave($__internal_ade284bc7526ebe00e5dfc92383586a59b63679e61f09edde0a58f0f463cba0f_prof);

    }

    // line 31
    public function block_body($context, array $blocks = array())
    {
        $__internal_72114f2020ec96ec5ff24b511cc243157e90c029d70aba16e6eba44f67824204 = $this->env->getExtension("native_profiler");
        $__internal_72114f2020ec96ec5ff24b511cc243157e90c029d70aba16e6eba44f67824204->enter($__internal_72114f2020ec96ec5ff24b511cc243157e90c029d70aba16e6eba44f67824204_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_72114f2020ec96ec5ff24b511cc243157e90c029d70aba16e6eba44f67824204->leave($__internal_72114f2020ec96ec5ff24b511cc243157e90c029d70aba16e6eba44f67824204_prof);

    }

    // line 32
    public function block_javascripts($context, array $blocks = array())
    {
        $__internal_f853f9e6aab914bcfcbbf33456361f97bfb0751fd0e31db4bc5a23546871a4f5 = $this->env->getExtension("native_profiler");
        $__internal_f853f9e6aab914bcfcbbf33456361f97bfb0751fd0e31db4bc5a23546871a4f5->enter($__internal_f853f9e6aab914bcfcbbf33456361f97bfb0751fd0e31db4bc5a23546871a4f5_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        // line 33
        echo "\t\t\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>
\t\t\t<script src=\"";
        // line 34
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("bootstrap-3.3.7-dist/js/bootstrap.min.js"), "html", null, true);
        echo "\"></script>
\t\t";
        
        $__internal_f853f9e6aab914bcfcbbf33456361f97bfb0751fd0e31db4bc5a23546871a4f5->leave($__internal_f853f9e6aab914bcfcbbf33456361f97bfb0751fd0e31db4bc5a23546871a4f5_prof);

    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  141 => 34,  138 => 33,  132 => 32,  121 => 31,  112 => 16,  105 => 11,  99 => 10,  88 => 8,  77 => 7,  69 => 36,  66 => 32,  64 => 31,  49 => 19,  46 => 18,  44 => 10,  39 => 8,  35 => 7,  27 => 1,);
    }
}
/* <!DOCTYPE html>*/
/* <html>*/
/*     <head>*/
/*         <meta charset="UTF-8" />*/
/* 		<meta http-equiv="X-UA-Compatible" content="IE=edge">*/
/* 		<meta name="viewport" content="width=device-width, initial-scale=1">*/
/*         <title>{% block title %}{% endblock %}</title>*/
/* 		<meta name="description" content="{% block description %}{% endblock %}" />*/
/* 		*/
/*         {% block stylesheets %}*/
/* 			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">*/
/* 			<!--[if lt IE 9]>*/
/* 				<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>*/
/* 				<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>*/
/* 			<![endif]-->*/
/* 			<link href="{{asset('css/style.css')}}" rel="stylesheet" />*/
/* 		{% endblock %}*/
/* 		*/
/*         <link rel="icon" type="image/x-icon" href="{{ asset('img/logo.png') }}" />*/
/* 		*/
/* 		<!-- Begin Cookie Consent plugin by Silktide - http://silktide.com/cookieconsent -->*/
/* 			<script type="text/javascript">*/
/* 				window.cookieconsent_options = {"message":"Strona korzysta z plików cookies w celu realizacji usług i zgodnie z Polityką Plików Cookies.","dismiss":"Rozumiem","learnMore":"Dowiedz się więcej","link":null,"theme":"dark-floating"};*/
/* 			</script>*/
/* */
/* 			<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.10/cookieconsent.min.js"></script>*/
/* 		<!-- End Cookie Consent plugin -->*/
/* */
/*     </head>*/
/*     <body>*/
/*         {% block body %}{% endblock %}*/
/*         {% block javascripts %}*/
/* 			<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>*/
/* 			<script src="{{ asset('bootstrap-3.3.7-dist/js/bootstrap.min.js') }}"></script>*/
/* 		{% endblock %}*/
/*     </body>*/
/* </html>*/
