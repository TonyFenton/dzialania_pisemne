<?php

/* @Twig/Exception/exception_full.html.twig */
class __TwigTemplate_dbcc2aa21042ee96c0bbd5a90fd62d2c188a08547fb6c3ad4a2d84178925d686 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@Twig/layout.html.twig", "@Twig/Exception/exception_full.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'title' => array($this, 'block_title'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@Twig/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_d4a063269cdc02d80ff0ccf672ec8922657b75d3f99d5e31a89cad8f9d45ab86 = $this->env->getExtension("native_profiler");
        $__internal_d4a063269cdc02d80ff0ccf672ec8922657b75d3f99d5e31a89cad8f9d45ab86->enter($__internal_d4a063269cdc02d80ff0ccf672ec8922657b75d3f99d5e31a89cad8f9d45ab86_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/exception_full.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_d4a063269cdc02d80ff0ccf672ec8922657b75d3f99d5e31a89cad8f9d45ab86->leave($__internal_d4a063269cdc02d80ff0ccf672ec8922657b75d3f99d5e31a89cad8f9d45ab86_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_361c2bafaac9c06daaaf8476b44a3148570eb152fd7319badfee69a735a64a0d = $this->env->getExtension("native_profiler");
        $__internal_361c2bafaac9c06daaaf8476b44a3148570eb152fd7319badfee69a735a64a0d->enter($__internal_361c2bafaac9c06daaaf8476b44a3148570eb152fd7319badfee69a735a64a0d_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('request')->generateAbsoluteUrl($this->env->getExtension('asset')->getAssetUrl("bundles/framework/css/exception.css")), "html", null, true);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
";
        
        $__internal_361c2bafaac9c06daaaf8476b44a3148570eb152fd7319badfee69a735a64a0d->leave($__internal_361c2bafaac9c06daaaf8476b44a3148570eb152fd7319badfee69a735a64a0d_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_1d8137076d854024944b6b881673bce4ba7f3d269ccfb1d379d0b84d934c6767 = $this->env->getExtension("native_profiler");
        $__internal_1d8137076d854024944b6b881673bce4ba7f3d269ccfb1d379d0b84d934c6767->enter($__internal_1d8137076d854024944b6b881673bce4ba7f3d269ccfb1d379d0b84d934c6767_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        // line 8
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "message", array()), "html", null, true);
        echo " (";
        echo twig_escape_filter($this->env, (isset($context["status_code"]) ? $context["status_code"] : $this->getContext($context, "status_code")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (isset($context["status_text"]) ? $context["status_text"] : $this->getContext($context, "status_text")), "html", null, true);
        echo ")
";
        
        $__internal_1d8137076d854024944b6b881673bce4ba7f3d269ccfb1d379d0b84d934c6767->leave($__internal_1d8137076d854024944b6b881673bce4ba7f3d269ccfb1d379d0b84d934c6767_prof);

    }

    // line 11
    public function block_body($context, array $blocks = array())
    {
        $__internal_2f1d69ef671dcf5f5f22a381886fe3a528519c5c3472c75e9e3cb67ed37ef8b3 = $this->env->getExtension("native_profiler");
        $__internal_2f1d69ef671dcf5f5f22a381886fe3a528519c5c3472c75e9e3cb67ed37ef8b3->enter($__internal_2f1d69ef671dcf5f5f22a381886fe3a528519c5c3472c75e9e3cb67ed37ef8b3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 12
        echo "    ";
        $this->loadTemplate("@Twig/Exception/exception.html.twig", "@Twig/Exception/exception_full.html.twig", 12)->display($context);
        
        $__internal_2f1d69ef671dcf5f5f22a381886fe3a528519c5c3472c75e9e3cb67ed37ef8b3->leave($__internal_2f1d69ef671dcf5f5f22a381886fe3a528519c5c3472c75e9e3cb67ed37ef8b3_prof);

    }

    public function getTemplateName()
    {
        return "@Twig/Exception/exception_full.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 12,  72 => 11,  58 => 8,  52 => 7,  42 => 4,  36 => 3,  11 => 1,);
    }
}
/* {% extends '@Twig/layout.html.twig' %}*/
/* */
/* {% block head %}*/
/*     <link href="{{ absolute_url(asset('bundles/framework/css/exception.css')) }}" rel="stylesheet" type="text/css" media="all" />*/
/* {% endblock %}*/
/* */
/* {% block title %}*/
/*     {{ exception.message }} ({{ status_code }} {{ status_text }})*/
/* {% endblock %}*/
/* */
/* {% block body %}*/
/*     {% include '@Twig/Exception/exception.html.twig' %}*/
/* {% endblock %}*/
/* */
